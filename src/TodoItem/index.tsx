import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { TodoItemProps } from '../types/types';
import './TodoItem.css';

const TodoItem = ({text, completed, onDelete, onComplete}: TodoItemProps) => (
    <li className="TodoItem">
      <CompleteIcon
        completed={completed}
        onComplete={onComplete}
      />
      <p
        className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
      >
        {text}
      </p>
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
);

export { TodoItem };