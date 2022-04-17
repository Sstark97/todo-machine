import { WithStorageListener } from "./WithStorageListener"
import { AiOutlineReload } from "react-icons/ai";
import { ChangeAlertProps } from "../types/types";
import "./ChangeAlert.css";

const ChangeAlert = ({show, toggleShow}: ChangeAlertProps) => {
    if (show) {
        return (
          <div className="container">
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
        );
      } else {
        return null;
      }
};

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };