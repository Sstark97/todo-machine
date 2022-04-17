import { useState} from 'react';
import { useStorageListenerProps } from "../types/types";

const useStorageListener = ({ sincronize }: useStorageListenerProps) => {
        const [storageChange, setStorageChange] = useState<boolean>(false);

        window.addEventListener('storage', (change: StorageEvent) => {
            if(change.key === 'TODOS_V1'){
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            sincronize();
            setStorageChange(false);
        }

        return {
            show: storageChange,
            toggleShow
        };
};

export { useStorageListener };