import React, { useContext, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";

import TodoContext from "../../contexts/todo.context";
import styles from "./TodoList.module.scss";
import EditTodoModal from "../EditModal/EditModal";
import useModal from "../../shared/useModal";

interface Props {}

const TodoList = (props: Props) => {
  const { list, editId } = useContext(TodoContext);
  const { open, onClose, onOpen } = useModal();

  useEffect(() => {
    if (editId) {
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);


  return (
    <div className={styles.todoList}>
      {list.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <EditTodoModal open={open} onClose={onClose} />
    </div>
  );
};

export default TodoList;
