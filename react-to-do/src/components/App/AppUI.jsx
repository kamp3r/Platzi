import React, { useContext } from 'react';
import CreateButton from '../CreateButton';
import ToDoList from '../ToDoList';
import ToDoItem from '../ToDoItem';
import ToDoCounter from '../ToDoCounter';
import ToDoSearch from '../ToDoSearch';
import ToDoForm from '../ToDoForm';
import Modal from '../Modal';
import { ToDoContext } from '../ToDoContext';
import './App.css';

const AppUI = () => {
  const {loading, searchedTodos, completeTodo, deleteTodo, openModal} = useContext(ToDoContext);

  return (
    <div className='App'>
      <ToDoCounter />
      <ToDoSearch />
        <ToDoList>
          {loading && <p>Loading...</p>}
          {searchedTodos.map((todo) => (
            <ToDoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </ToDoList>
            {!!openModal && <Modal><ToDoForm/></Modal>}

      <CreateButton/>
    </div>
  );
};

export default AppUI;
