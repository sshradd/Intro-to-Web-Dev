'use client'
import { useRef, useState, useEffect } from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import ListItems from "./ListItem";

// Define the type for a todo item
interface Todo {
  map(
    arg0: (item: any, index: number) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: number;
  text: string;
  isComplete: boolean;
}

const Todo = () => {
  //ensuring you don't accidentally access properties on a null value.
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const toggle = (id: number) => {
    setTodoList((prvTodos) => {
      return prvTodos.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        return todo;
      });
    });
  };

  //it will return ALL the todos except the one the user wants to delete
  const deleteTodo = (id: number) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  const add = () => {
    // Ensure inputRef.current exists before accessing .value
    const inputText = inputRef.current?.value.trim() || "";

    //if add is clicked and there is nothing in the input field
    //nothing will happen
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    //spread opperator used to combine previous and new todos
    setTodoList((prev: any) => [...prev, newTodo]);
    //clear the input field
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-96 rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <FaClipboardCheck size="32px" />
        <h1 className="text-3xl font-semibold">To-do List</h1>
      </div>

      {/*----input---*/}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 placeholder: text-slate-600"
          type="text"
          placeholder="Add task"
        ></input>
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-300 w-24 h-10 text-black text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/*----list items---*/}
      <div>
        {/* maps array objects to display*/}
        {todoList.map((item: any, index: number) => {
          return (
            <ListItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
