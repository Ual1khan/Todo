import React, { ChangeEvent, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import useModal from "../../shared/useModal";
import styles from "./Header.module.scss";
import TodoModal from "../TodoModal/TodoModal";
import TodoContext from "../../contexts/todo.context";

interface Props {}

const Header = (props: Props) => {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState<string>('');
  const onChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  }

  const { open, onClose, onOpen } = useModal({ initialOpen: false });
  const {
    open: addModalOpen,
    onClose: onAddModalClose,
    onOpen: onAddModalOpen,
  } = useModal();

  const onSubmit = () => {
    todo ? addTodo({ id: uuidv4(), text: todo, done: false }) : alert('Wrong input');
    setTodo('');
    onAddModalClose();
  };

  return (
    <header className={styles.container}>
        <button className={styles.button} onClick={onOpen}>Open</button>
        <button className={styles.button} onClick={onAddModalOpen}>Add todo</button>
        <TodoModal 
          modal={open} 
          onClose={onClose}
          title="Welcome"
        >  
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, molestias! Praesentium illum aliquam minima earum? Itaque ea tempora maiores quam nulla. Facilis unde, dignissimos possimus dolor magnam quo amet deserunt?</p>
        </TodoModal>
        <TodoModal
          modal={addModalOpen}
          onClose={onAddModalClose}
          title="Add new Todo"
          actions={{
            cancel: {
              text: "Cancel",
              onCancel: onAddModalClose,
            },
            submit: {
              text: "Add",
              onSubmit: onSubmit,
            },
          }}
        >
          <form>
            <label className={styles.todo_label} htmlFor="todo">Todo: </label>
            <input id="todo" type="text" value={todo} onChange={onChangeTodo} placeholder="add todo" required />
          </form>
        </TodoModal>
    </header>
  );
};

export default Header;




        