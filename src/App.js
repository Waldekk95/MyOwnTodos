import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [itemList, setItemList] = useState([]);

  console.log(itemList);
  const addUserHandler = (uName, uAge) => {
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
