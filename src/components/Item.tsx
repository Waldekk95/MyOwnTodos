import React, { useState } from "react";
import "./Item.css";

type ItemProps = {
  id: string;
  todosName: string;
  todosTime: number;
  timeWhenAdded: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedName: string, updatedTime: number) => void;
};

const Item: React.FC<ItemProps> = ({
  id,
  todosName,
  todosTime,
  timeWhenAdded,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todosName);
  const [editTime, setEditTime] = useState(todosTime);
  const [isChecked, setIsChecked] = useState(false);

  const saveEditHandler = () => {
    onEdit(id, editName, editTime);
    setIsEditing(false);
  };

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <li className={`item ${isChecked ? "item-checked" : ""}`}>
      {isEditing ? (
        <div className="item-edit">
          <input
            className="item-edit-input"
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            className="item-edit-input"
            type="number"
            value={editTime}
            onChange={(e) => setEditTime(Number(e.target.value))}
          />
          <button className="item-button" onClick={saveEditHandler}>
            Zapisz
          </button>
          <button className="item-button" onClick={() => setIsEditing(false)}>
            Anuluj
          </button>
        </div>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              className="item-checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <h4 className="item-name">{todosName}</h4>
          </div>
          <div className="item-actions">
            <p className="item-time">Czas: {todosTime} min</p>
            <button className="item-button" onClick={() => setIsEditing(true)}>
              Edytuj
            </button>
            <button className="item-button item-button_close" onClick={() => onDelete(id)}>
              X
            </button>
            <p className="item-date">Dodano: {timeWhenAdded}</p>
          </div>
        </>
      )}
    </li>
  );
};

export default Item;

