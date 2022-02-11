import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
