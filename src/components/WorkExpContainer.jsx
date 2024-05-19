import { AddNewButton } from "./AddNewButton";
import { WorkExperienceDetails } from "./WorkExpDetails";
import { WorkExpModal } from "./WorkExpModal";
import { createElement, useState } from "react";


function WorkExpContainer() {
  const [modalVisible, setModalVisible] = useState(false);
  const [jobInfo, setJobInfo] = useState([{
    companyInput: "",
    dateFrom: "",
    dateUntil: "",
    jobTitle: "",
    jobOverview: ""

  }]);

// resets state - used when closing modal by saving or cancelling addition  
  function resetState() {
    setJobInfo({
    companyInput: "",
    dateFrom: "",
    dateUntil: "",
    jobTitle: "",
    jobOverview: ""
    })
  }

  function handleOpenClick() {
    setModalVisible(true);
    console.log(jobInfo);
  }

  function handleCloseClick() {
    setModalVisible(false);
    resetState();
    console.log(jobInfo);
  }

// on clicking save, a new div should be created within workExp div called WorkExperienceDetails  
  function handleSaveClick() {
    setModalVisible(false);
    setJobInfo({...jobInfo,
    companyInput: "",
    dateFrom: "5555",
    dateUntil: "",
    jobTitle: "",
    jobOverview: "" 
    })
    
  }

// need to create if / case for to handle data coming from different input sources
function handleStateChange(input, source) {
  if (source === "companyInput") {
    setJobInfo({...jobInfo, companyInput: input})
  } else if (source === "dateFrom") {
    setJobInfo({...jobInfo, dateFrom: input})
  } else if (source === "dateUntil") {
    setJobInfo({...jobInfo, dateUntil: input})
  } else if (source === "jobTitle") {
    setJobInfo({...jobInfo, jobTitle: input})
  } else if (source === "jobOverview") {
    setJobInfo({...jobInfo, jobOverview: input})
  } 
}

  return (
    <div className="workExp">
      <AddNewButton className="addWorkExp" text="+" action={handleOpenClick} />
      <WorkExperienceDetails />
      <WorkExpModal
        isOpen={modalVisible}
        closeAction={handleCloseClick}
        saveAction={handleSaveClick}
        stateUpdate={handleStateChange}
      />
    </div>
  );
}

export { WorkExpContainer };
