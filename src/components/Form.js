import { useState } from "react";
import "./Form.css";

import ErrorModal from "./UI/ErrorModal";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addItem = (event) => {
    if (userName.trim().length === 0) {
      setError({
        title: "Wprowadź nazwę",
        message: "Nazwa nie może być pusta",
      });
      return;
    }
    if (userAge < 0.01) {
      setError({
        title: "Błędny wiek",
        message: "Wprowadź prawidłowy wiek (większy od 0)",
      });
      return;
    } else {
      event.preventDefault();
      props.onAddItem(userName, userAge);
      setUserName("");
      setUserAge("");
    }
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
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
    </>
  );
};

export default Form;
