import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div className="modal">
      <header className="modal-header">
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button>Rozumiem</button>
      </footer>
    </div>
  );
};

export default ErrorModal;
