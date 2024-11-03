import { useState } from "react";
import Todo from "../components/Todo";

function TodoPage() {
  return (
    <div className="bg-slate-800 grid py-8 min-h-screen">
      <Todo />
    </div>
  );
}

export default TodoPage;
