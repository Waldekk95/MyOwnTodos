import "./List.css";
import Item from "./Item";
import React from "react";

const List = (props: { items: any[] }) => {
  const basicTodos = [
    {
      name: "Zrobic zakupy",
      age: 19,
      id: "A1",
    },
    {
      name: "Poprzątać dom",
      age: 25,
      id: "A2",
    },
  ];

  return (
    <ul className="list">
      {basicTodos.map((basicTodo) => {
        return (
          <Item
            userName={basicTodo.name}
            userAge={basicTodo.age}
            id={basicTodo.id}
          ></Item>
        );
      })}
      {props.items.map((item) => {
        return (
          <Item userName={item.name} userAge={item.age} id={item.id}></Item>
        );
      })}
    </ul>
  );
};

export default List;
