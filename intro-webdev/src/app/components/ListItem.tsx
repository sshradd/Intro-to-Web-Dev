import React from "react";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

interface ListItemProps {
  text: string;
  id: number;
  isComplete: boolean;
  deleteTodo: any;
  toggle: any;
}

const ListItem: React.FC<ListItemProps> = ({
  text,
  id,
  isComplete,
  deleteTodo,
  toggle,
}) => {
  return (
    <div className="flex items-center my-3 gap-1 ">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? <FaRegSquareCheck style={{ color: 'rgb(51 65 85)' }} size="20px"/> : <FaRegSquare style={{ color: 'rgb(51 65 85)' }} size="20px"/>}
        <p className="text-slate-700 ml-4 text-lg">{text}</p>
      </div>
      <FaRegSquareMinus
        className="cursor-pointer"
        onClick={() => {
          deleteTodo(id);
        }}
        style={{ color: 'rgb(51 65 85)' }}
        size="20px"
        /> 
      
    </div>
  );
};

export default ListItem;
