import React from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoStatistics from "./components/TodoStatistics/TodoStatistics";

import { TodoProvider } from "./contexts/todo.context";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";

function App() {

  return (
    <div className="App">
      <TodoProvider>
        <Header />
        <div className={styles.wrap}>
          <TodoStatistics />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
