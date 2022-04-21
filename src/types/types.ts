export interface AllProps {
    loading: boolean,
    error: boolean,
    totalTodos: number,
    completedTodos: number,
    searchValue: string,
    setSearchValue?(text:string):void,
    searchedTodos: any[],
    addTodo?(text: string): void,
    completeTodo?(text: string): void,
    deleteTodo?(text: string): void,
    openModal: boolean,
    setOpenModal?(value: boolean): void,
};

export interface LocalStorageInitialState extends Required<Pick<AllProps, 'loading' | 'error' >> {
    sincronized: boolean,
    item: Todo[]
};

export interface LocalStoragePayload extends Partial<Pick<LocalStorageInitialState, 'loading' | 'error' | 'sincronized' | 'item'>>{}

export interface LocalStorageAction {
    type: string,
    payload?: LocalStoragePayload
};

export interface LocalStorageReducerObject {
    [key: string]: (state: LocalStorageInitialState, action: LocalStorageAction) => LocalStorageInitialState,
}

export interface ModalProps {
    children?: React.ReactNode;
}

export interface ChildrenProps extends Required<Pick<AllProps, 'loading'>>{
    children?: React.ReactNode[]
};

export interface Todo extends Pick<AllProps, 'deleteTodo' | 'addTodo'>{
    text:string
    completed:boolean
};

export interface TodoItemProps extends Pick<Todo, 'text' | 'completed'>{
    onComplete():void,
    onDelete():void
};

export interface IconTypes {
    check(): JSX.Element,
    delete():JSX.Element
};

export interface TodoIconProps {
    type: string,
    onClick: () => void
};

export interface TodoListProps extends Required<Pick<AllProps, 'error' | 'searchedTodos' | 'loading' | 'searchValue' | 'totalTodos'>>{
    sincronized: boolean,
    onError():JSX.Element,
    onLoading():JSX.Element,
    onEmpty():JSX.Element,
    onEmptySearchValue(toSearch:string):JSX.Element,
    render?(todo: Todo):JSX.Element,
    children?(todo: Todo):JSX.Element
};

export interface useStorageListenerProps {
    sincronize():void
}

export interface CreateTodoButtonProps extends Required<Pick<AllProps, 'setOpenModal' | 'openModal'>>{}
export interface TodoCounterProps extends Required<Pick<AllProps, 'totalTodos' | 'completedTodos' >>{
    loading?: boolean,
}
export interface TodoFormProps extends Required<Pick<AllProps, 'addTodo' | 'setOpenModal'>>{}
export interface TodoSearchProps extends Required<Pick<AllProps, 'searchValue' | 'setSearchValue'>>{
    loading?: boolean,
}