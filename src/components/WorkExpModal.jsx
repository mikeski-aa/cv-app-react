import "./WorkExpModal.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

function WorkExpModal({ isOpen, saveAction, closeAction }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="workExpModal">
        <FormInput className="companyInput" type="text" placeholder="Enter company name" isDisabled={false}/>
        <FormInput className="dateFrom" type="date" isDisabled={false}/>
        <FormInput className="dateUntil" type="date" isDisabled={false}/>
        <FormInput className="jobTitle" type="text" placeholder="Enter job title" isDisabled={false}/>
        <FormInput className="jobOverview" type="textarea" placeholder="Describe your role" isDisabled={false}/>
        <AddNewButton className="closeModal" text="Close" action={saveAction} />
        <AddNewButton className="saveModal" text="Save" action={closeAction} />
        
      </div>
    </div>
  );
}

export { WorkExpModal };
