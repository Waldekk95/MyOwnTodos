import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

type Item = {
  id: string;
  name: string;
  time: number;
  timeWhenAdded: Date;
};

function App() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const addTodosHandler = (newTodo: Item) => {
    setItemList((prevItemsList) => {
      return [...prevItemsList, newTodo];
    });
  };

  return (
    <div>
      <Form onAddItem={addTodosHandler} />
      <List items={itemList} />
    </div>
  );
}

export default App;
