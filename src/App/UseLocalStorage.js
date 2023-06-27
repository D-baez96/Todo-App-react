import React from 'react';

    function useLocalStorage (itemName,initialValue) {
        const localstorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
        if(!localstorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItem = initialValue;
        }else{
        parsedItem = JSON.parse(localstorageItem);
        }
    
        const [item, setItem] = React.useState(parsedItem);
    
        const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
        setItem(newItem);
        };
        return [item, saveItem];
    }
export {useLocalStorage};