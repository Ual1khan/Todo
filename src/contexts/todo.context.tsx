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
  statistics: { total: 0, doneCount: 0, changes: 0 },
  toggleDone: (id: string) => {},
});

export const TodoProvider = ({ children }: Props) => {
  const [list, setList] = useState<Todo[]>(initialTodos);
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

  useEffect(() => {
    const changes = statistics.changes + 1;
    const doneCount = list.reduce(
      (count, todo) => (todo.done ? count + 1 : count),
      0
    );
    const newStat: Statistics = { total: list.length, doneCount, changes };

    setStatistics(newStat);
  }, [list]);

  return (
    <TodoContext.Provider value={{ list, statistics, toggleDone }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
