import React from 'react';
import './Modal.css';

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  blur?: boolean;
  width: number;
  footer?: React.ReactNode;
  body: React.ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeButtonClassName?: string;
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

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  blur = false,
  title,
  width,
  header,
  footer,
  body,
  overlayClassName,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  closeButtonClassName,
}) => {
  if (!open) return null;

  return (
    <div
      className={overlayClassName || `modal-overlay${blur ? ' modal-blur' : ''}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={contentClassName || 'modal-content'}
        style={width ? { width: typeof width === 'number' ? `${width}px` : width } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {header ? (
          <div className={headerClassName || 'modal-header'}>{header}</div>
        ) : title ? (
          <div className={headerClassName || 'modal-header'}>
            <span>{title}</span>
            <div
              className={closeButtonClassName || 'modal-close'}
              onClick={onClose}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClose();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="close"
            >
              ×
            </div>
          </div>
        ) : null}

        {/* Body */}
        <div className={bodyClassName || 'modal-body'}>{body}</div>

        {/* Footer */}
        {footer && <div className={footerClassName || 'modal-footer'}>{footer}</div>}
      </div>
    </div>
  );
};
