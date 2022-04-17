import { useState, useEffect } from 'react';

function useLocalStorage(itemName: string, initialValue: any) {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [sincronized, setSincronized] = useState<boolean>(true);
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
        setSincronized(true);
      } catch(error) {
        setError(error as boolean);
      }
    }, 3000);
  }, [sincronized]);
  
  const saveItem = (newItem: Object) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error as boolean);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronized(false);
  };

  return {
    item,
    saveItem,
    sincronizeItem,
    loading,
    error,
    sincronized,
  };
}

export { useLocalStorage };