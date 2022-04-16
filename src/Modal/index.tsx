import ReactDOM from 'react-dom';
import { ChildrenProps } from '../types/types';
import './Modal.css';

const Modal = ({
    children,
  }: ChildrenProps) =>{
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}

export { Modal };