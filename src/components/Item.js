import "./Item.css";

const Item = (props) => {
  return (
    <li className="item" key={props.id}>
      {`${props.userName} ma (${props.userAge}) lat`}
    </li>
  );
};

export default Item;
