import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";
import { useState } from "react";

function FullName() {
  const [disabledInput, setDisabledInput] = useState(true);
  const [editVisibility, setEditVisibility] = useState("span");
  const [editSCVisibility, setSCVisibility] = useState("none");

  function handleEditClick() {
    console.log("called");
    setDisabledInput(false);
    setEditVisibility("none");
    setSCVisibility("");
  }

  return (
    <div className="fullName">
      <FormInput
        className="fullNameInput"
        type="text"
        placeholder="Enter full name here"
        isDisabled={disabledInput}
      />
      <AddNewButton
        className="editNameInput"
        text="Edit"
        action={handleEditClick}
        buttonDisplay={editVisibility}
      />
      <AddNewButton
        className="saveNameInput"
        text="Save"
        buttonDisplay={editSCVisibility}
      />
      <AddNewButton
        className="cancelNameInput"
        text="Cancel"
        buttonDisplay={editSCVisibility}
      />
    </div>
  );
}

export { FullName };
