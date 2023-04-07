import "./Item.css";

const Item = (props) => {
  return (
    <li className="item" key={props.id}>
      {`${props.userName} ma (${props.userAge}) lat`}
      <button className="item-button">X</button>
    </li>
  );
};

export default Item;
