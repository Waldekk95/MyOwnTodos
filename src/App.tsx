import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

type Item = {
  id: string,
  name: string,
  age: number,
}

function App() {
  const [itemList, setItemList] = useState<Item[]>([]);

  console.log(itemList);
  const addUserHandler = (uName: any, uAge: any) => {
    setItemList((prevItemsList) => {
      return [
        ...prevItemsList,
        { name: uName, age: uAge, id: Math.random().toString() },
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
