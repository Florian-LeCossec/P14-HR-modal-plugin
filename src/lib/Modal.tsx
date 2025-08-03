import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import modalStyles from './Modal.css?inline';

const injectStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'flcossec-react-modal-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = modalStyles;
      document.head.appendChild(style);
    }
  }
};

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  blur?: boolean;
  persistent?: boolean;
  width?: number | string;
  backgroundColor?: string;
  textColor?: string;
  footer?: React.ReactNode;
  body: React.ReactNode;
  closeButton?: boolean;
  className?: string; // Pour wrapper contenu modal
  overlayClassName?: string; // Pour overlay
  zIndex?: number;
};

type ModalWithHeader = BaseModalProps & {
  header: React.ReactNode;
  title?: never;
};

type ModalWithTitle = BaseModalProps & {
  header?: never;
  title: string;
};

type ModalProps = ModalWithHeader | ModalWithTitle;

export type { ModalProps };

const FOCUSABLE_SELECTORS =
  'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  blur = false,
  persistent = false,
  title,
  width = '500px',
  backgroundColor = '#fff',
  textColor = '#000',
  footer,
  body,
  closeButton = true,
  className,
  overlayClassName,
  zIndex = 1000,
  header,
}) => {
  useEffect(() => {
    injectStyles();
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || persistent) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements =
          modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];
        const activeEl = document.activeElement;

        if (e.shiftKey) {
          if (activeEl === firstEl) {
            lastEl.focus();
            e.preventDefault();
          }
        } else {
          if (activeEl === lastEl) {
            firstEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose, persistent]);

  useEffect(() => {
    if (open && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      } else {
        modalRef.current.focus();
      }
    }
  }, [open]);

  if (!open) return null;

  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }

  const overlayClasses = `modal-overlay-default${blur ? ' modal-blur' : ''}${overlayClassName ? ` ${overlayClassName}` : ''}`;

  return createPortal(
    <div
      className={overlayClasses}
      style={{ zIndex }}
      onClick={persistent ? undefined : onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby="modal-body"
    >
      <div
        ref={modalRef}
        className={`modal-content-default ${className || ''}`}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          backgroundColor,
          color: textColor,
        }}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {(header || title) && (
          <div className="modal-header">
            {header ?? <span id="modal-title">{title}</span>}
            {closeButton && (
              <div
                className="modal-close-default"
                onClick={onClose}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClose();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Close modal"
              >
                ×
              </div>
            )}
          </div>
        )}
        <div id="modal-body" className="modal-body-default">
          {body}
        </div>
        {footer && <div className="modal-footer-default">{footer}</div>}
      </div>
    </div>,
    modalRoot,
  );
};
