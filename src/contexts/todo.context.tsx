import { createContext, useEffect, useState } from "react";
import { Todo } from "../shared/todo";

interface Props {
  children: React.ReactNode;
}

interface Statistics {
  total: number;
  doneCount: number;
  changes: number;
}

const initialTodos: Todo[] = [
  { id: "1", text: "Todo 1", done: true },
  { id: "2", text: "Todo 2", done: true },
  { id: "3", text: "Todo 3", done: false },
  { id: "4", text: "Todo 4", done: false },
  { id: "5", text: "Todo 5", done: false },
];

const TodoContext = createContext({
  list: initialTodos,
  editId: "",
  setEditId: (id: string) => {},
  statistics: { total: 0, doneCount: 0, changes: 0 },
  toggleDone: (id: string) => {},
  addTodo: (todo: Todo) => {},
  editTodo: (todo: Todo) => {},
  deleteTodo: (todo: Todo) => {}
});

export const TodoProvider = ({ children }: Props) => {
  const [list, setList] = useState<Todo[]>(initialTodos);
  const [editId, setEditId] = useState<string>("");
  const [statistics, setStatistics] = useState<Statistics>({
    total: list.length,
    doneCount: 0,
    changes: 0,
  });

  const toggleDone = (id: string) => {
    const newTodos = list.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return todo;
    });
    setList(newTodos);
  };

  const addTodo = (todo: Todo) => {
    const newTodos = [...list, todo];
    setList(newTodos);
  };

  const editTodo = (todo: Todo) => {
    const newTodos = [...list].map((el) => {
      if (el.id === todo.id) {
        return todo;
      }
      return el;
    });
    setList(newTodos);
  };

  const deleteTodo = (todo: Todo) => {
    const newTodos = [...list].filter(task => task.id !== todo.id);
    setList(newTodos);
  }

  useEffect(() => {
    const changes = statistics.changes + 1;
    const doneCount = list.reduce(
      (count, todo) => (todo.done ? count + 1 : count),
      0
    );
    const newStat: Statistics = { total: list.length, doneCount, changes };

    setStatistics(newStat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <TodoContext.Provider
      value={{
        list,
        statistics,
        editId,
        setEditId,
        toggleDone,
        addTodo,
        editTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
