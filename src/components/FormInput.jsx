function FormInput({className, type, placeholder, isDisabled, action, fieldValue}) {
    return <input 
    type={type} 
    className={className} 
    placeholder={placeholder} 
    disabled={isDisabled}
    onChange={e => {action(e)}}
    value={fieldValue}
    >   
    </input>
}

export { FormInput };