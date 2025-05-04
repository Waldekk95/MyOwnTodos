import "./List.css";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const List = (props: { items: any[] }) => {
  const [todos, setTodos] = useState([
    { name: "Odkurzyć", time: 30, timeWhenAdded: new Date(1732000040000), id: "A1X" },
    { name: "Zrobić todosa", time: 15, timeWhenAdded: new Date(1731000550000), id: "A2" },
    { name: "Bezbłędnie pisać", time: 60, timeWhenAdded: new Date(1730000102000), id: "A3" },
    { name: "Napisać dobrą apkę", time: 55, timeWhenAdded: new Date(1732105502000), id: "A4" },
    { name: "Ambitnie dzialać dalej", time: 25, timeWhenAdded: new Date(1722200044410), id: "A5" },
    { name: "Wykonać stage 4 i 5", time: 35, timeWhenAdded: new Date(1741134009800), id: "A6" },
  ]);

  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    if (props.items.length > 0) {
      const newItem = props.items[props.items.length - 1];
      setTodos((prevTodos) => [...prevTodos, newItem]);
    }
  }, [props.items]);

  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [editTime, setEditTime] = useState<number>(0);

  const startEditing = (id: string, currentText: string, currentTime: number) => {
    setEditTodoId(id);
    setEditText(currentText);
    setEditTime(currentTime);
  };

  const saveEdit = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, name: editText, time: editTime } : todo))
    );
    setEditTodoId(null);
    setEditText("");
    setEditTime(0);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
    setEditText("");
    setEditTime(0);
  };

  const deleteItemHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const sortTodosByName = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) =>
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setIsAscending(!isAscending);
    setTodos(sortTodos);
  };

  const sortTodosByTime = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) => (isAscending ? a.time - b.time : b.time - a.time));
    setIsAscending(!isAscending);
    setTodos(sortTodos);
  };

  const sortTodosByDate = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) =>
      isAscending
        ? a.timeWhenAdded.getTime() - b.timeWhenAdded.getTime()
        : b.timeWhenAdded.getTime() - a.timeWhenAdded.getTime()
    );
    setIsAscending(!isAscending);
    setTodos(sortTodos);
  };

  return (
    <ul className="list">
      <h3 className="list-title">Lista zadań</h3>
      <button className="form-button" onClick={sortTodosByName}>
        Sortuj po nazwie
      </button>
      <button className="form-button" onClick={sortTodosByTime}>
        Sortuj po czasie trwania
      </button>
      <button className="form-button" onClick={sortTodosByDate}>
        Sortuj po dacie
      </button>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          todosName={todo.name}
          todosTime={todo.time}
          timeWhenAdded={todo.timeWhenAdded.toLocaleString()}
          isEditing={editTodoId === todo.id}
          editText={editTodoId === todo.id ? editText : ""}
          editTime={editTodoId === todo.id ? editTime : 0}
          onDelete={deleteItemHandler}
          onStartEditing={startEditing}
          onSaveEdit={() => saveEdit(todo.id)}
          onCancelEdit={cancelEdit}
          onEditTextChange={(e) => setEditText(e.target.value)}
          onEditTimeChange={(e) => setEditTime(Number(e.target.value))}
        />
      ))}
      <h3 className="list-title">
        Suma zadań do zrobienia: <b>{todos.length}</b>
      </h3>
    </ul>
  );
};

export default List;
