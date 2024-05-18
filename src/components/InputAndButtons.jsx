import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";
import { useState } from "react";
import "./InputAndButtons.css"

// !!! REMEMBER !!! FormInput handles actions differently. Code will need to be adjusted

function InputAndButtons({inputDivClass, inputClass, inputType, placeholderText}) {
  const [disabledInput, setDisabledInput] = useState(true);
  const [visibleToggle, setVisibleToggle] = useState(false);
  const [tempInputContent, setTempInputContent] = useState(null);
  const [inputContent, setInputContent] = useState(null);

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
  }

 // on clicking cancel display edit, hide cancel and save
 // cancel should ideally return to the value input field begun with
 // having issues getting this to work, will leave it as is for now.
  function handleCancelClick() {
    setDisabledInput(true);
    setVisibleToggle(false);
  }

 // temp input holder -> made in order to be able to store values when cancel is clicked 
  function handleInputChange(e){
    setTempInputContent(e.target.value);
  }


  return (
    <div className={inputDivClass}>
      <FormInput
        className={inputClass}
        type={inputType}
        placeholder={placeholderText}
        isDisabled={disabledInput}
        action={handleInputChange}
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

export { InputAndButtons };
