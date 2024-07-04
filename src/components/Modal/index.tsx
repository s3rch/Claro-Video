// @packages
import { ReactNode } from 'react';

// @own
import './styles.scss';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  show: boolean;
}

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const handleStopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleStopPropagation}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
