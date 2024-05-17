function FormInput({className, type, placeholder, isDisabled}) {
    return <input 
    type={type} 
    className={className} 
    placeholder={placeholder} 
    disabled={isDisabled}>   
    </input>
}

export { FormInput };