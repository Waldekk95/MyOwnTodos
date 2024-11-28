import React from "react";
import "./Item.css";

type Props = {
  id: string;
  todosName: string;
  todosTime: number;
  timeWhenAdded: string;
  isEditing: boolean;
  editText: string;
  editTime: number;
  onDelete: (id: string) => void;
  onStartEditing: (id: string, currentText: string, currentTime: number) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onEditTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEditTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Item = ({
  id,
  todosName,
  todosTime,
  timeWhenAdded,
  isEditing,
  editText,
  editTime,
  onDelete,
  onStartEditing,
  onSaveEdit,
  onCancelEdit,
  onEditTextChange,
  onEditTimeChange,
}: Props) => {
  return (
    <li className="item" key={id}>
      <div className="item-left">
        <input type="checkbox" className="item-checkbox"></input>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={onEditTextChange}
              className="item-edit-input"
              placeholder="Nowa nazwa"
            />
            <input
              type="number"
              value={editTime}
              onChange={onEditTimeChange}
              className="item-edit-input item-edit-input_number"
              placeholder="Nowy czas"
              min="1"
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
            <button className="item-button" onClick={onSaveEdit}>
              Zapisz
            </button>
            <button className="item-button" onClick={onCancelEdit}>
              Anuluj
            </button>
          </>
        ) : (
          <>
            <button
              className="item-button"
              onClick={() => onStartEditing(id, todosName, todosTime)}
            >
              Edytuj
            </button>
            <button className="item-button_close" onClick={() => onDelete(id)}>
              X
            </button>
          </>
        )}
      </div>
      <span className="item-date">Dodano: {timeWhenAdded}</span>
    </li>
  );
};

export default Item;
