import { AiOutlineReload } from "react-icons/ai";
import { useStorageListenerProps} from "../types/types";
import { useStorageListener } from "../hooks/useStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = ({ sincronize }: useStorageListenerProps) => {
    const { show, toggleShow } = useStorageListener({sincronize});

    if (show) {
        return (
            <div className="container">
              <div className="container-son">
                <p>Hubo cambios</p>
                <button
                  onClick={toggleShow}
                >
                    <div className="sincronize-container">
                        <span>Sincronizar</span>
                        <AiOutlineReload />
                    </div>
                </button>
              </div>
            </div>
        );
      } else {
        return null;
      }
};

export { ChangeAlert };