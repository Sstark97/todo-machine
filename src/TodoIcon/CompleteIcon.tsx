import { TodoIcon } from './';

const CompleteIcon = ({ completed, onComplete }: any) =>{
  return (
    <TodoIcon
      type="check"
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };