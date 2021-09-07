import React, {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoModal from "./components/TodoModal/TodoModal";
import TodoStatistics from "./components/TodoStatistics/TodoStatistics";
import { TodoProvider } from "./contexts/todo.context";

import styles from "./App.module.scss";

function App() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  }

  return (
    <div className="App">
      <button onClick={openModal}>Open</button>
      <TodoModal modal={modal} setModal={setModal}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, molestias! Praesentium illum aliquam minima earum? Itaque ea tempora maiores quam nulla. Facilis unde, dignissimos possimus dolor magnam quo amet deserunt?</p>
      </TodoModal>
      <TodoProvider>
        <div className={styles.wrap}>
          <TodoStatistics />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
