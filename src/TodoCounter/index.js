import React from 'react';
import './TodoCounter.css';


function TodoCounter ({totalTodos,completedTodos,loading}){
    
    return(
    <h1 className={`TodoCounter ${!!loading && ".TodoCounter--loading"}`}>
        Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span>  Tareas 😲
    </h1>
    );
}

export {TodoCounter};