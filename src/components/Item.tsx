import React from "react";
import "./Item.css";

type Props = {
  id: string;
  todosName: string;
  todosTime: number;
  onDelete: (id: string) => void;
};

const Item = ({ id, todosName, todosTime, onDelete }: Props) => {
  return (
    <li className="item" key={id}>
      {`${todosName} (${todosTime} minut)`}
      <button className="item-button" onClick={() => onDelete(id)}>
        X
      </button>
    </li>
  );
};

export default Item;
