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
      <div className="item-left">
        <input type="checkbox" className="item-checkbox"></input>
        <p className="item-name">
          {`${todosName} `}
          {`(${todosTime} minut)`}
        </p>
      </div>
      <div className="item-right">
        <label>Priorytet:
          <select name="selectedPriority">
            <option value="low">niski</option>
            <option value="medium">średni</option>
            <option value="high">wysoki</option>
          </select>
        </label>
        <button className="item-button" onClick={() => onDelete(id)}>
          X
        </button>
      </div>
    </li>
  );
};

export default Item;
