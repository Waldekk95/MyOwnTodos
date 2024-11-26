import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

type Item = {
  id: string;
  name: string;
  time: number;
};

function App() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const addTodosHandler = (uName: any, uTime: any) => {
    setItemList((prevItemsList) => {
      return [
        ...prevItemsList,
        { name: uName, time: uTime, id: Math.random().toString() },
      ];
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
