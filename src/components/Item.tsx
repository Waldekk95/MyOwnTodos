import React from "react";
import "./Item.css";

type Props = {
  id: string;
  todosName: string;
  todosTime: number;
  isCompleted: boolean;
  onDelete: (id: string) => void;
};

const Item = ({
  id,
  todosName,
  todosTime,
  isCompleted,
  onDelete,
  isEditing,
  editText,
  editTime,
  onStartEditing,
  onSaveEdit,
  onCancelEdit,
  onEditChange,
}: Props & {
  isEditing: boolean;
  editText: string;
  editTime: number;
  onStartEditing: (id: string, currentText: string, currentTime: number) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <li className="item" key={id}>
      <div className="item-left">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={onEditChange}
              className="item-edit-input"
            />
            <input
              type="number"
              value={editTime}
              onChange={onEditChange}
              className="item-edit-input"
            />
          </>
        ) : (
          <p className="item-name">
            {`${todosName} `}
            {`(${todosTime} minut)`}
          </p>
        )}
      </div>
      <div className="item-right">
        {isEditing ? (
          <>
            <button className="form-button" onClick={onSaveEdit}>
              Zapisz
            </button>
            <button className="form-button" onClick={onCancelEdit}>
              Anuluj
            </button>
          </>
        ) : (
          <>
            <button
              className="form-button"
              onClick={() => onStartEditing(id, todosName, todosTime)}
            >
              Edytuj
            </button>
            <button className="item-button" onClick={() => onDelete(id)}>
              X
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Item;
