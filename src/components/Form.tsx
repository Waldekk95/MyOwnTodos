import { useState } from "react";
import React from "react";
import "./Form.css";

import ErrorModal from "./UI/ErrorModal";

type FormError = {
  title: string,
  message: string,
}

const Form = (props: { onAddItem: (arg0: string, arg1: string) => void }) => {
  const [todosName, setTodosName] = useState("");
  const [todosTime, setTodosTime] = useState("");
  const [error, setError] = useState<FormError | null>(null);

  const addItem = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (todosName.trim().length === 0) {
      setError({
        title: "Wprowadź nazwę",
        message: "Nazwa zadania nie może być pusta",
      });
      return;
    }
    if (todosTime < "0") {
      setError({
        title: "Błędny czas",
        message: "Wprowadź prawidłowy czas (większy od 0)",
      });
      return;
    } else {
      props.onAddItem(todosName, todosTime);
      setTodosName("");
      setTodosTime("");
    }
  };

  const errorHandler = () => {
    setError(null);
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
        <label className="form-input__name">Nazwa Zadania</label>
        <input
          className="form-input"
          type="text"
          value={todosName}
          onChange={(evt) => {
            setTodosName(evt.target.value);
          }}
        ></input>
        <label className="form-input__name">Czas wykonania zadania (minuty)</label>
        <input
          className="form-input"
          type="number"
          value={todosTime}
          onChange={(evt) => {
            setTodosTime(evt.target.value);
          }}
        ></input>
        <button className="form-button" type="submit">
          Dodaj zadanie
        </button>
      </form>
    </>
  );
};

export default Form;
