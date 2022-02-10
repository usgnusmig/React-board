import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState({});

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
