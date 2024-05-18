function FormInput({className, type, placeholder, isDisabled, action}) {
    return (
    <label>
        <input 
            type={type} 
            className={className} 
            placeholder={placeholder} 
            disabled={isDisabled}
            onChange={e => {action(e)}}/>   
     
        <span 
            className="error" aria-live="polite">

        </span>
    </label>
    
    
    )
}

export { FormInput };