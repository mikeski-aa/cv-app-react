import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

// edit modal for specific job card
function EditExistingExpModal({
  modalState,
  companyObjectName,
  dateObjectFrom,
  dateObjectUntill,
  jobObjectTitle,
  jobObjectDesc,
  closeEditModal,
  saveEditModal,
  stateUpdate
}) {
  if (!modalState) return null;

  return (
    <div className="modal">
      <div className="editWorkExpModal">
        <FormInput
          className="companyInput"
          type="text"
          isDisabled={false}
          git
          inputDefault={companyObjectName}
          action={stateUpdate}
          labelText="Company Name"
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectFrom}
          action={stateUpdate}
          labelText="Starting date"
        />
        <FormInput
          className="dateUntil"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectUntill}
          action={stateUpdate}
          labelText="Finish date"
        />
        <FormInput
          className="jobTitle"
          type="text"
          isDisabled={false}
          inputDefault={jobObjectTitle}
          action={stateUpdate}
          labelText="Job Title"
        />
        <FormInput
          className="jobOverview"
          type="textarea"
          isDisabled={false}
          inputDefault={jobObjectDesc}
          action={stateUpdate}
          labelText="Job responsibilities"
        />
        <AddNewButton className="closeModal" text="Close" action={closeEditModal} />
        <AddNewButton className="saveModal" text="Save" action={saveEditModal} />
      </div>
    </div>
  );
}

export { EditExistingExpModal };
