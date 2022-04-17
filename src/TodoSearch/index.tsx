import { ChangeEvent } from 'react';
import { TodoSearchProps } from '../types/types';
import './TodoSearch.css';

const TodoSearch = ({searchValue, loading, setSearchValue}: TodoSearchProps) => {
  
  const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(setSearchValue){
      const todoSearch: string = event.target.value as string
      setSearchValue(todoSearch);
      console.log(event.target.value);
    }
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };