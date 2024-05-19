import "./WorkExpModal.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

function WorkExpModal({ isOpen, saveAction, closeAction, stateUpdate }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="workExpModal">
        <FormInput
          className="companyInput"
          type="text"
          placeholder="Enter company name"
          isDisabled={false}
          action={stateUpdate}
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          action={stateUpdate}
        />
        <FormInput
          className="dateUntil"
          type="date"
          isDisabled={false}
          action={stateUpdate}
        />
        <FormInput
          className="jobTitle"
          type="text"
          placeholder="Enter job title"
          isDisabled={false}
          action={stateUpdate}
        />
        <FormInput
          className="jobOverview"
          type="textarea"
          placeholder="Describe your role"
          isDisabled={false}
          action={stateUpdate}
        />
        <AddNewButton className="closeModal" text="Close" action={closeAction} />
        <AddNewButton className="saveModal" text="Save" action={saveAction} />
      </div>
    </div>
  );
}

export { WorkExpModal };
