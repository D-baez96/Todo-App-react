import React from 'react';
import './TodoSearch.css'


function TodoSearch ({searchValue, setSearchValue,loading}){
    const onSearchValue = (event)=>{
        setSearchValue(event.target.value);
    }

    return(
        <input
            className="TodoSearch"
            placeholder="Aprender React"
            value= {searchValue}
            onChange={onSearchValue}
            disabled = {loading}
        />
    );
}

export {TodoSearch};