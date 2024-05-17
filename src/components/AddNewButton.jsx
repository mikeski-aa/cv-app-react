// function for creating buttons to be used throughout the app
function AddNewButton({ className, text, action, buttonDisplay }) {
  return (
    <button
      className={className}
      onClick={action}
      style={{ display: buttonDisplay }}
    >
      {text}
    </button>
  );
}

export { AddNewButton };
