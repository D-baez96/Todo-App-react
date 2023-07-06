import React from "react";
import './ChangeAlert.css';
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show,toggleShow}){
  if(show){
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece Que cambiaste Tus TODOs En otra pestaña o navegador</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!⚡
          </button>
        </div>
      </div>
        
    )
  }else{
    return null;
  }

}

const ChangeAlertWithStorageListener= withStorageListener(ChangeAlert)



export { ChangeAlertWithStorageListener };