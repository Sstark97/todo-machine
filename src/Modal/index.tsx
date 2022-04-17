import ReactDOM from 'react-dom';
import { ModalProps } from '../types/types';
import './Modal.css';

const Modal = ({
    children,
  }: ModalProps) =>{
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}

export { Modal };