import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

// edit modal for specific job card
function EditExistingExpModal(modalState, companyObject, dateObjectF, closeEditModal) {
  if (modalState === true) return null;

  return (
    <div className="modal">
      <div className="editWorkExpModal">
        <FormInput
          className="companyName"
          type="text"
          isDisabled={false}
          inputDefault={companyObject}
          labelText="Company Name"
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectF}
          labelText="Start date"
        />

        
        <AddNewButton
          className="closeModal"
          text="Close"
          action={null}
        />
        <AddNewButton
          className="saveModal"
          text="Save"
          action={null}
        />
      </div>
    </div>
  );
}

export { EditExistingExpModal };
