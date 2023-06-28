import React from 'react';

    function useLocalStorage (itemName,initialValue) {
        const [item, setItem] = React.useState(initialValue);
        const [loading, setLoading] = React.useState(true);
        const [error, setError] = React.useState(false);


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
                    setItem(parsedItem);
                    }
                
            setLoading(false);
            }catch(error){
                setLoading(false);
                setError(true);
            }
        },2000);
    },);


        const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
        setItem(newItem);
        };
        return {
            item, 
            saveItem,
            loading,
            error
        };
    }
export {useLocalStorage};

//   const defaultTodos= [
//   { text : "Aprender React", completed: true},
//   { text : "Tomar Tinto", completed: false},
//   { text : "Lavar La loza", completed: false},
//   { text : "Tender la cama", completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');