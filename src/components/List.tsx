import React, { useState } from "react";
import "./List.css";
import Item from "./Item";

type ListProps = {
  items: {
    id: string;
    name: string;
    time: number;
    timeWhenAdded: Date;
  }[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedName: string, updatedTime: number) => void;
};

const List: React.FC<ListProps> = ({ items, onDelete, onEdit }) => {
  const [isAscending, setIsAscending] = useState(true);

  const sortByName = () => {
    items.sort((a, b) =>
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setIsAscending(!isAscending);
  };

  const sortByTime = () => {
    items.sort((a, b) => (isAscending ? a.time - b.time : b.time - a.time));
    setIsAscending(!isAscending);
  };

  const sortByDate = () => {
    items.sort((a, b) =>
      isAscending
        ? a.timeWhenAdded.getTime() - b.timeWhenAdded.getTime()
        : b.timeWhenAdded.getTime() - a.timeWhenAdded.getTime()
    );
    setIsAscending(!isAscending);
  };

  return (
    <div className="list-container">
      <div className="list-controls">
        <button className="form-button" onClick={sortByName}>
          Sortuj po nazwie
        </button>
        <button className="form-button" onClick={sortByTime}>
          Sortuj po czasie
        </button>
        <button className="form-button" onClick={sortByDate}>
          Sortuj po dacie
        </button>
      </div>
      {items.length === 0 ? (
        <p className="list-title">Brak zadań do wykonania</p>
      ) : (
        <ul className="list">
          {items.map((todo) => (
            <Item
              key={todo.id}
              id={todo.id}
              todosName={todo.name}
              todosTime={todo.time}
              timeWhenAdded={todo.timeWhenAdded.toLocaleString()}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
