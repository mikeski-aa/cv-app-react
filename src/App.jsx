import "./App.css";
import { InputAndButtons } from "./components/InputAndButtons";
import { ContactInfo } from "./components/ContactInfo";


function App() {
  return (
    <>
      <h1>CV</h1>
      <InputAndButtons
        inputDivClass="fullNameDiv"
        inputClass="inputName"
        inputType="text"
        placeholderText="Enter your full name"
      />
      <ContactInfo/>
    </>
  );
}

export default App;
