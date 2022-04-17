import { useState, ComponentType } from 'react';
import { ChangeAlertProps, ChangeAlertWithStorageListenerProps } from "../types/types";


function WithStorageListener(WrappedComponent: ComponentType<ChangeAlertProps>) {
    return function  WrappedComponentWithStorageListener({ sincronize }: ChangeAlertWithStorageListenerProps): JSX.Element{
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

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
};

export { WithStorageListener };