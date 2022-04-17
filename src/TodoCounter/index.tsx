import './TodoCounter.css';
import { TodoCounterProps } from '../types/types';

const TodoCounter = ({completedTodos, totalTodos, loading}: TodoCounterProps) => (
  <h2 className={`TodoCounter loading`} style={!!loading ? {opacity: '25%'} : undefined}>
    Has completado {completedTodos} de {totalTodos} TODOs
  </h2>
);


export { TodoCounter };