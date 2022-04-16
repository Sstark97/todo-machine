import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { IconTypes, TodoIconProps } from '../types/types';
import './TodoIcon.css';

const iconTypes: IconTypes = {
  "check": () => (
    <>
      <AiOutlineCheck />
    </>
  ),
  "delete": () => (
    <>
      <AiOutlineDelete />
    </>
  ),
};

const TodoIcon = ({ type, onClick }:TodoIconProps) =>{
  const icon = Object.entries(iconTypes).filter((icon: any) => icon[0] === type)[0];
  
  return (
    <div className="todo-icon" onClick={onClick}>
      {icon[1]()}
    </div>
  );
};

export { TodoIcon };