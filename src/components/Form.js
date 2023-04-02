import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addItem = (event) => {
    if (userName.trim().length === 0 || userAge < 0.01) {
      return;
    } else {
      event.preventDefault();
      props.onAddItem(userName, userAge);
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <form className="form" onSubmit={addItem}>
      <label className="form-input__name">Username</label>
      <input
        className="form-input"
        type="text"
        value={userName}
        onChange={(evt) => {
          setUserName(evt.target.value);
        }}
      ></input>
      <label className="form-input__name">Age (years)</label>
      <input
        className="form-input"
        type="number"
        value={userAge}
        onChange={(evt) => {
          setUserAge(evt.target.value);
        }}
      ></input>
      <button className="form-button" type="submit">
        Add User
      </button>
    </form>
  );
};

export default Form;
