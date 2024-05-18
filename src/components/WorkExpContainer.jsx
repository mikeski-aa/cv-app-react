import { AddNewButton } from "./AddNewButton";
import { WorkExperienceDetails } from "./WorkExpDetails";
import { WorkExpModal } from "./WorkExpModal";
import { useState } from "react";

function WorkExpContainer() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenClick() {
    setModalVisible(true);
  }

  function handleCloseClick() {
    setModalVisible(false);
  }

  return (
    <div className="workExp">
      <AddNewButton className="addWorkExp" text="+" action={handleOpenClick} />
      <WorkExperienceDetails />
      <WorkExpModal
        isOpen={modalVisible}
        closeAction={handleCloseClick}
        saveAction={handleCloseClick}
      />
    </div>
  );
}

export { WorkExpContainer };
