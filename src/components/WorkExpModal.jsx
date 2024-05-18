import "./WorkExpModal.css"
import { AddNewButton } from "./AddNewButton";

function WorkExpModal({isOpen, saveAction, closeAction}) {
    if (!isOpen) return null;
    
    return (
        <div className="modal">
            <div className="workExpModal">
                <AddNewButton className="closeModal" text="Close" action={saveAction}/>
                <AddNewButton className="saveModal" text="Save" action={closeAction}/>
            </div>
        </div>
    )
}

export { WorkExpModal };