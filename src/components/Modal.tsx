import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Store the previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Focus the modal content
    setTimeout(() => {
      contentRef.current?.focus();
    }, 0);

    // Handle ESC key
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus to the previously focused element
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        ref={contentRef}
        className="modal-content"
        tabIndex={-1}
      >
        {title && (
          <header className="modal-header">
            <h2 id="modal-title">{title}</h2>
            <button
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </header>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  // Render at the root level using portal
  return createPortal(modalContent, document.body);
}