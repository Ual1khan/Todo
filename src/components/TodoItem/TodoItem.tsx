import React, { useContext } from "react";
import { Todo } from "../../shared/todo";

import TodoContext from "../../contexts/todo.context";
import styles from "./TodoItem.module.scss";

interface Props {
  todo: Todo;
}

const TodoItem: React.FunctionComponent<Props> = (props: Props) => {
  const { todo } = props;

  const { toggleDone } = useContext(TodoContext);

  // useEffect(() => {
  //   console.log("Effect");
  // });

  return (
    <div className={styles.card} onClick={() => toggleDone(todo.id)}>
      <input
        readOnly
        checked={todo.done}
        className={styles.checkbox}
        type="checkbox"
      />
      <div className={styles.text}>{todo.text}</div>
    </div>
  );
};

export default TodoItem;
