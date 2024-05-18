// function for creating buttons to be used throughout the app
function AddNewButton({ className, text, action }) {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
}

export { AddNewButton };
