import React from "react";
import "./ErrorModal.css";

type Props = {
  onConfirm: any;
  title: string;
  message: string;
  onClick?: MouseEvent;
};

const ErrorModal = (props: Props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="modal">
        <header className="modal-header">
          <h2>{props.title}</h2>
        </header>
        <div className="modal-content">
          <p>{props.message}</p>
          <button className="modal-button" onClick={props.onConfirm}>
            Okej
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
