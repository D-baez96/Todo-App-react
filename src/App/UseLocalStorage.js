import React from 'react';

    function useLocalStorage (itemName,initialValue) {
        const [item, setItem] = React.useState(initialValue);
        const [loading, setLoading] = React.useState(true);
        const [error, setError] = React.useState(false);
        const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localstorageItem = localStorage.getItem(itemName);
    
                let parsedItem;
    
                if(!localstorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = initialValue;
                    }else{
                    parsedItem = JSON.parse(localstorageItem);
                    
                    }
            setSincronizedItem(true);
            setItem(parsedItem);
            setLoading(false);
            }catch(error){
                setLoading(false);
                setError(true);
            }
        },2000);
    },[sincronizedItem]);

        const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
        setItem(newItem);
        };

        const sincronizeItem =()=>{
            setLoading(true);
            setSincronizedItem(false);
        }

        return {
            item, 
            saveItem,
            loading,
            error,
            sincronizeItem
        };
    }
export {useLocalStorage};
