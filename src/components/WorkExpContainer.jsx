import { AddNewButton } from "./AddNewButton";
import { WorkExperienceDetails } from "./WorkExpDetails";
import { WorkExpModal } from "./WorkExpModal";
import { useState } from "react";

function WorkExpContainer() {
  const [modalVisible, setModalVisible] = useState(false);
  const [jobInfo, setJobInfo] = useState({
    companyInput: "",
    dateFrom: "",
    dateUntil: "",
    jobTitle: "",
    jobOverview: ""

  });

  function handleOpenClick() {
    setModalVisible(true);
  }

  function handleCloseClick() {
    setModalVisible(false);
    console.log(jobInfo);
  }

// need to create if / case for to handle data coming from different input sources
  function handleStateChange(input, source) {
    const newData = {source: `${input}`}
    setJobInfo({
      ...jobInfo, 
      ...newData})
  }

  return (
    <div className="workExp">
      <AddNewButton className="addWorkExp" text="+" action={handleOpenClick} />
      <WorkExperienceDetails />
      <WorkExpModal
        isOpen={modalVisible}
        closeAction={handleCloseClick}
        saveAction={handleCloseClick}
        stateUpdate={handleStateChange}
      />
    </div>
  );
}

export { WorkExpContainer };
