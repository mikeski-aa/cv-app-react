function FormInput({ className, type, placeholder, isDisabled, action, inputDefault, labelText}) {
  // seperating event handler here gives more
  // flexibility - i.e can add parameters to functions being passed down
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const sourceInput = className;
    action(newValue, sourceInput);
  };
  return (
    <label> {labelText}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleInputChange} 
        defaultValue={inputDefault}
      />

      <span className="error" aria-live="polite"></span>
    </label>
  );
}

export { FormInput };
