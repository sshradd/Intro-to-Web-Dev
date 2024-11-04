// /components/Todo.tsx

'use client';
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FaClipboardCheck } from "react-icons/fa6";
import ListItems from "./ListItem";

// Define the type for a todo item
interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

const Todo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // Fetch existing todos from MongoDB when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("/api/todos");
        setTodoList(response.data); // Load fetched todos into state
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Function to add a new todo item
  const addTodo = async () => {
    const inputText = inputRef.current?.value.trim() || "";
    if (!inputText) return; // Return if input is empty

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    try {
      const response = await axios.post("/api/todos", newTodo); // Save new todo to MongoDB
      setTodoList((prev) => [...prev, response.data]); // Use response from server to get the saved todo
      if (inputRef.current) inputRef.current.value = ""; // Clear input
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Function to toggle completion status of a todo item
  const toggle = async (id: number) => {
    const todoToUpdate = todoList.find(todo => todo.id === id);
    if (!todoToUpdate) return;

    const updatedTodo = { ...todoToUpdate, isComplete: !todoToUpdate.isComplete };

    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      )
    );

    // Update MongoDB with new completion status
    try {
      await axios.put("/api/todos", { id, isComplete: updatedTodo.isComplete }); // Update the completion status
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  // Function to delete a todo item
  const deleteTodo = async (id: number) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    // Delete from MongoDB
    try {
      await axios.delete("/api/todos", { data: { id } }); // Pass the id in the request body
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-96 rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <div style={{ color: 'rgb(30 58 138)' }}>
          <FaClipboardCheck  size="32px" />
        </div>
        <h1 className="text-3xl font-semibold text-blue-900">To-do List</h1>
      </div>

      {/*----input---*/}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add task"
        />
        <button
          onClick={addTodo}
          className="border-none rounded-full bg-blue-300 w-24 h-10 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/*----list items---*/}
      <div>
        {todoList.map((item) => (
          <ListItems
            key={item.id} // Use item.id instead of index for better performance
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
