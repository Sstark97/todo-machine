import './TodoCounter.css';
import { TodoCounterProps } from '../types/types';

const TodoCounter = ({completedTodos, totalTodos}: TodoCounterProps) => (
  <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
);


export { TodoCounter };