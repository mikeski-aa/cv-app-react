function FormInput({className, type, placeholder, isDisabled, action}) {
    return <input 
    type={type} 
    className={className} 
    placeholder={placeholder} 
    disabled={isDisabled}
    onChange={e => {action(e)}}>   
    </input>
}

export { FormInput };