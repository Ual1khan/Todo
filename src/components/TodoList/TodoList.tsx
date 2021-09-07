import React, { useContext, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";

import TodoContext from "../../contexts/todo.context";
import styles from "./TodoList.module.scss";

interface Props {}

const TodoList = (props: Props) => {
  const { list } = useContext(TodoContext);

  useEffect(() => {
    console.log("List was rendered");
  }, []);

  return (
    <div className={styles.todoList}>
      {list.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
