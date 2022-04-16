import { TodoIcon } from './';

const DeleteIcon = ({ onDelete }: any) => {
  return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };