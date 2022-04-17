import { cloneElement, Children, ReactElement } from "react";
import { ChildrenProps } from "../types/types";

const TodoHeader = ({ children, loading }: ChildrenProps) => (
    <header>
        {Children.toArray(children).map((child) => cloneElement(child as ReactElement<any>, { loading }))}
    </header>
);

export { TodoHeader };