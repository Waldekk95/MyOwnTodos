import React from "react";
import "./Item.css";

type Props = {
  id: string;
  userName: string;
  userAge: number;
};

const Item = (props: Props) => {
  return (
    <li className="item" key={props.id}>
      {`${props.userName} ma (${props.userAge}) lat`}
      <button className="item-button">X</button>
    </li>
  );
};

export default Item;
