import { useState, ChangeEvent, FormEvent } from 'react';
import { TodoFormProps } from '../types/types';
import './TodoForm.css';

const TodoForm = ({ addTodo, setOpenModal }: TodoFormProps) => {
  const [newTodoValue, setNewTodoValue] = useState<string>('');
  
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    if(setOpenModal){
      setOpenModal(false);
    }
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    addTodo(newTodoValue);
    setOpenModal(false);

  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };