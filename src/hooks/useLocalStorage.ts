import { useState, useEffect } from 'react';

function useLocalStorage(itemName: string, initialValue: any) {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<any>(initialValue);
  
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

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error as boolean);
      }
    }, 3000);
  });
  
  const saveItem = (newItem: Object) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error as boolean);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };