import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";
import { useState } from "react";
import "./FullNameEnter.css"

function FullName() {
  const [disabledInput, setDisabledInput] = useState(true);
  const [visibleToggle, setVisibleToggle] = useState(false);
  const [tempInputContent, setTempInputContent] = useState("");
  const [inputContent, setInputContent] = useState("");

 // on clicking edit, display show and cancel buttons, hide edit button 
  function handleEditClick() {
    setDisabledInput(false);
    setVisibleToggle(true);
    
  }

 // on clicking save display edit, hide cancel and save, save input state
  function handleSaveClick() {
    setDisabledInput(true);
    setVisibleToggle(false);
    setInputContent(tempInputContent);
    console.log(`saved value ${inputContent}`)
  }

 // on clicking cancel display edit, hide cancel and save
  function handleCancelClick() {
    setDisabledInput(true);
    setVisibleToggle(false);
    setTempInputContent("");

    
    
  }

  function handleInputChange(e){
    setTempInputContent(e.target.value);
    console.log(tempInputContent);
    console.log(inputContent);
  }


  return (
    <div className="fullName">
      <FormInput
        className="fullNameInput"
        type="text"
        placeholder="Enter full name here"
        isDisabled={disabledInput}
        action={handleInputChange}
        fieldValue={tempInputContent}
      />
      <AddNewButton
        className={!visibleToggle ? "editInput show" : "editInput hide"}
        text="Edit"
        action={handleEditClick}
      />
      <AddNewButton
        className={visibleToggle ? 'saveNameInput show' : 'saveNameInput hide'}
        text="Save"
        action={handleSaveClick}
      />
      <AddNewButton
        className={visibleToggle ? 'cancelNameInput show' : 'cancelNameInput hide'}
        text="Cancel" 
        action={handleCancelClick}
      />
    </div>
  );
}

export { FullName };
