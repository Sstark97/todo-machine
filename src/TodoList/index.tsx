import './TodoList.css'
import { TodoListProps } from '../types/types';

const TodoList = ({ error, loading, searchedTodos, onError, onLoading, onEmpty, render}: TodoListProps) => (
    <section>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !searchedTodos.length && onEmpty())}

        {searchedTodos.map(render)}
    </section>
);

export { TodoList };