import React, { useContext } from "react";
import { Todo } from "../../shared/todo";

import TodoContext from "../../contexts/todo.context";
import styles from "./TodoItem.module.scss";

interface Props {
  todo: Todo;
}

const TodoItem: React.FunctionComponent<Props> = (props: Props) => {
  const { todo } = props;

  const { toggleDone, setEditId, deleteTodo } = useContext(TodoContext);

  const onEditClick = () => {
    setEditId(todo.id);
  };

  const onDelete = () => {
    deleteTodo(todo);
  }

  return (
    <div className={styles.card}>
      <div>
        <input
          readOnly
          checked={todo.done}
          className={styles.checkbox}
          type="checkbox"
        />
        <div className={styles.text}>
          <span
            onClick={() => toggleDone(todo.id)}
            className={styles.text_checkbox}
          ></span>
          {todo.text}
        </div>
      </div>
      <div>
        <button className={styles.btn_edit} onClick={onEditClick}>
          Edit
        </button>
        <button className={styles.btn_delete} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
