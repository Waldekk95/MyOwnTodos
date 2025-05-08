import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

type Item = {
  id: string;
  name: string;
  time: number;
  timeWhenAdded: Date;
};

function App() {
  const [itemList, setItemList] = useState<Item[]>([
    { id: "X1", name: "Odkurzyć", time: 30, timeWhenAdded: new Date(1732000040000) },
    { id: "X2", name: "Zrobić todosa", time: 15, timeWhenAdded: new Date(1731000550000) },
    { id: "X3", name: "Bezbłędnie pisać", time: 60, timeWhenAdded: new Date(1730000102000) },
    { id: "X4", name: "Wykonać etap 6 i 7", time: 120, timeWhenAdded: new Date(1730099102000) },
  ]);

  const addItemHandler = (newTodo: Item) => {
    setItemList((prevItemsList) => [...prevItemsList, newTodo]);
  };

  const deleteItemHandler = (id: string) => {
    setItemList((prevItemsList) => prevItemsList.filter((item) => item.id !== id));
  };

  const editItemHandler = (id: string, updatedName: string, updatedTime: number) => {
    setItemList((prevItemsList) =>
      prevItemsList.map((item) =>
        item.id === id ? { ...item, name: updatedName, time: updatedTime } : item
      )
    );
  };

  return (
    <div>
      <Form onAddItem={addItemHandler} />
      <List
        items={itemList}
        onDelete={deleteItemHandler}
        onEdit={editItemHandler}
      />
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} MyOwnTodos. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default App;
