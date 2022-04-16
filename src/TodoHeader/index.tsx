import { ChildrenProps } from "../types/types";

const TodoHeader = ({ children }: ChildrenProps) => (
    <header>
        {children}
    </header>
);

export { TodoHeader };