import "./List.css";
import Item from "./Item";

const List = (props) => {
  // const users = [
  //   {
  //     name: "Adam",
  //     age: 19,
  //     id: "A1",
  //   },
  //   {
  //     name: "Ela",
  //     age: 25,
  //     id: "A2",
  //   },
  //   {
  //     name: "Grześ",
  //     age: 34,
  //     id: "A3",
  //   },
  // ];

  return (
    <ul className="list">
      {/* {users.map((user) => {
        return (
          <Item userName={user.name} userAge={user.age} id={user.id}></Item>
        );
      })} */}
      {props.items.map((item) => {
        return (
          <Item userName={item.name} userAge={item.age} id={item.id}></Item>
        );
      })}
    </ul>
  );
};

export default List;
