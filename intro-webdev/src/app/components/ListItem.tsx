import React from "react";
import { FaRegSquare, FaRegSquareCheck, FaRegSquareMinus } from "react-icons/fa6";

interface ListItemProps {
  text: string;
  id: number;
  isComplete: boolean;
  deleteTodo: any;
  toggle: any;
}

const ListItem = ({
  text,
  id,
  isComplete,
  deleteTodo,
  toggle,
}: ListItemProps) => {
  return (
    <div className="flex items-center my-3 gap-1">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <div style={{ color: 'rgb(51 65 85)' }}>
          {isComplete ? (
            <FaRegSquareCheck size="20px" />
          ) : (
            <FaRegSquare size="20px" />
          )}
        </div>
        <p className="text-slate-700 ml-4 text-lg">{text}</p>
      </div>
      
      <div onClick={() => deleteTodo(id)} style={{ color: 'rgb(51 65 85)', cursor: 'pointer' }}>
        <FaRegSquareMinus size="20px" />
      </div>
    </div>
  );
};

export default ListItem;
