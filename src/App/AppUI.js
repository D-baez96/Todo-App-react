import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading} from '../TodosLoading';
import { TodosError} from '../TodosError';
import { EmptyTodos} from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import React from 'react';

function AppUI (){
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <>
        <TodoCounter/>
        <TodoSearch />
                        <TodoList>
                        {loading && (
                            <>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                            </>
                            )}
                            {error && <TodosError/>}
                            {(!loading && searchedTodos.lenght === 0 ) && <EmptyTodos/>}
            
                            {searchedTodos.map (todo => (
                            <TodoItem 
                                key={todo.text} 
                                text ={todo.text}
                                completed = {todo.completed}
                                onComplete = {() => completeTodo (todo.text)}
                                onDelete = {() => deleteTodo (todo.text)}
                            />
                            ))}
                        </TodoList>
        <CreateTodoButton/>
        </>
    );
}
export {AppUI};