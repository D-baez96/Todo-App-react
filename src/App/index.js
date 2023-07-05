import React from 'react';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading} from '../TodosLoading';
import { TodosError} from '../TodosError';
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal';
import { TodoForm} from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {UseTodos} from './useTodos';


function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo,
} = UseTodos ();
return (
  <>
      <TodoHeader loading = {loading}>
          <TodoCounter
              totalTodos={totalTodos}
              completedTodos = {completedTodos}
              
          />
          <TodoSearch
              searchValue= {searchValue}
              setSearchValue = {setSearchValue}
          />
      </TodoHeader>


      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError = {() =><TodosError />}
        onLoading= {() =><TodosLoading />}
        onEmptyTodos={() =><EmptyTodos />}
        onEmptySearchResults={(searchText) =><p> No hay resultados para {searchText}😲</p> }

        // render = {todo => (
        //   <TodoItem
        //   key={todo.text}
        //   text={todo.text}
        //   completed={todo.completed}
        //   onComplete={() => completeTodo(todo.text)}
        //   onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      
      <CreateTodoButton
          setOpenModal={setOpenModal}
      />

      {openModal && (
          <Modal>
              <TodoForm
                addTodo ={addTodo}
                setOpenModal ={setOpenModal}
              />
          </Modal>
      )}
  </>
  );
}

export default App;