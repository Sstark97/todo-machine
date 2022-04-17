import { useState } from 'react';
import { Todo } from '../types/types';
import { useLocalStorage } from './useLocalStorage';


function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
    sincronized
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const completedTodos: Todo[] = todos.filter((todo: Todo) => !!todo.completed).length;
  const totalTodos: number = todos.length;

  let searchedTodos: Todo[] = [];

  if (searchValue.length <= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo: Todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return {
      loading,
      error,
      sincronized,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue: setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos
    };
}

export { useTodos };