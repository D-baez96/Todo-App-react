import React from 'react';
import './TodoCounter.css';


function TodoCounter ({totalTodos,completedTodos}){
    
    return(
    <h1 className='TodoCounter'>
        Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span>  Tareas 😲
    </h1>
    );
}

export {TodoCounter};