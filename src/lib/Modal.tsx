import React from 'react';
import modalStyles from './Modal.css?inline';

// Injection automatique des styles CSS
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

export type { ModalProps };

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  blur = false,
  persistent = false,
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
  // Injecter les styles CSS au premier rendu
  React.useEffect(() => {
    injectStyles();
  }, []);

  if (!open) return null;

  return (
    <div
      className={overlayClassName || `modal-overlay-default${blur ? ' modal-blur' : ''}`}
      onClick={persistent ? undefined : onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={contentClassName || 'modal-content-default'}
        style={width ? { width: typeof width === 'number' ? `${width}px` : width } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {header ? (
          <div className={headerClassName || 'modal-header-default'}>{header}</div>
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
        <div className={bodyClassName || 'modal-body-default'}>{body}</div>

        {/* Footer */}
        {footer && <div className={footerClassName || 'modal-footer-default'}>{footer}</div>}
      </div>
    </div>
  );
};
