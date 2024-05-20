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
  close,
}) {
  if (!modalState) return null;

  return (
    <div className="modal">
      <div className="editWorkExpModal">
        <FormInput
          className="companyName"
          type="text"
          isDisabled={false}
          git
          inputDefault={companyObjectName}
          labelText="Company Name"
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectFrom}
          labelText="Starting date"
        />
        <FormInput
          className="dateUntil"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectUntill}
          labelText="Finish date"
        />
        <FormInput
          className="jobTitle"
          type="text"
          isDisabled={false}
          inputDefault={jobObjectTitle}
          labelText="Job Title"
        />
        <FormInput
          className="jobDesc"
          type="textarea"
          isDisabled={false}
          inputDefault={jobObjectDesc}
          labelText="Job responsibilities"
        />
        <AddNewButton className="closeModal" text="Close" action={close} />
        <AddNewButton className="saveModal" text="Save" action={close} />
      </div>
    </div>
  );
}

export { EditExistingExpModal };
