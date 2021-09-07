import React, { useContext } from "react";
import TodoContext from "../../contexts/todo.context";

import styles from "./TodoStatistics.module.scss";

interface Props {}

const TodoStatistics = (props: Props) => {
  const { statistics } = useContext(TodoContext);

  return (
    <div className={styles.statistics_wrap}>
      <div className={`${styles.number} ${styles.number_total}`}>Total: {statistics.total}</div>
      <div className={`${styles.number} ${styles.number_done}`}>Done: {statistics.doneCount}</div>
      <div className={`${styles.number} ${styles.number_changes}`}>Changes: {statistics.changes}</div>
    </div>
  );
};

export default TodoStatistics;
