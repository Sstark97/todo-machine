import './TodoList.css'
import { TodoListProps } from '../types/types';

const TodoList = ({ error, loading, searchedTodos, totalTodos, searchValue, children, onError, onLoading, onEmpty, onEmptySearchValue, render}: TodoListProps) => {
  const renderFunc = render || children;

  return(
    <section>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !searchedTodos && onEmpty())}
        {((!!totalTodos && !searchedTodos.length) && onEmptySearchValue(searchValue))}

        {renderFunc && searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };