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

  console.log("Dlaczego to się wykonuje 2 razy?");
  const addUserHandler = (uName: any, uTime: any) => {
    setItemList((prevItemsList) => {
      return [
        ...prevItemsList,
        { name: uName, time: uTime, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <Form onAddItem={addUserHandler} />
      <List items={itemList} />
    </div>
  );
}

export default App;
