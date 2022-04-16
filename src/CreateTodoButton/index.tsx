import './CreateTodoButton.css';
import { CreateTodoButtonProps } from '../types/types';

const CreateTodoButton = ({ setOpenModal, openModal }: CreateTodoButtonProps) => {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };