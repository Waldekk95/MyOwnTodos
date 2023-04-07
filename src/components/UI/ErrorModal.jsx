import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="modal">
        <header className="modal-header">
          <h2>{props.title}</h2>
        </header>
        <div className="modal-content">
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={props.onConfirm}>Okej</button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;
