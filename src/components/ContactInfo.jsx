import { InputAndButtons } from "./InputAndButtons";

function ContactInfo() {
  return (
    <div className="contactInfo">
      <InputAndButtons
        inputDivClass="emailInputDiv"
        inputClass="emailInput"
        inputType="email"
        placeholderText="Enter your email"
      />
      <InputAndButtons
        inputDivClass="phoneInputDiv"
        inputClass="phoneInput"
        inputType="number"
        placeholderText="Enter your phone number"
      />
    </div>
  );
}

export { ContactInfo };
