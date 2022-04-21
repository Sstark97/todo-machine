import { useReducer, useEffect } from 'react';
import { giveMyInitialState, ActionTypes, reducer } from './reducer';

function useLocalStorage(itemName: string, initialValue: any) {

  const [state, dispatch] = useReducer(reducer, giveMyInitialState(initialValue));

  const onError = () => dispatch({ type: ActionTypes.ERROR });
  const onInitialize = (item: any) => dispatch({ type: ActionTypes.INITIALIZE, payload: { item }  });
  const onSetItem = (item: any) => dispatch({ type: ActionTypes.SET_ITEM, payload: { item }});
  const onSincronize = () => dispatch({ type: ActionTypes.SINCRONIZE });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onInitialize(parsedItem);
      } catch(error) {
        onError();
      }
    }, 3000);
  }, [state.sincronized]);
  
  const saveItem = (newItem: Object) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSetItem(newItem);
    } catch(error) {
      onError();
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    ...state,
    saveItem,
    sincronizeItem,
  };
}

export { useLocalStorage };