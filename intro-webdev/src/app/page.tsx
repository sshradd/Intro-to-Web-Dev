import { useState } from "react";
import Link from "next/link";

function App() {
  return (
    <div className="bg-slate-800 grid place-items-center py-8 min-h-screen">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-white text-5xl ">Welcome!</p>
        <p className="text-white text-xl">This is a to-do list app.</p>
        <Link href="/todo">
          <button className="border-none rounded-full bg-blue-300  w-40 h-10 text-white text-lg font-medium cursor-pointer">Get things done</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
