import './TodoList.css'
import { ChildrenProps } from '../types/types';

const TodoList = ({ children }: ChildrenProps) => (
    <section>
      <ul>
        {children}
      </ul>
    </section>
);

export { TodoList };