import { AddNewButton } from "./AddNewButton";
import { WorkExpTemplate } from "./WorkExpTemplate";
import { WorkExpModal } from "./WorkExpModal";
import { useState } from "react";
import { v4 as uuidv4} from 'uuid'


function WorkExpContainer() {
  const [modalVisible, setModalVisible] = useState(false);
  const [jobInfo, setJobInfo] = useState([{
    id: uuidv4(),
    companyInput: "",
    dateFrom: "",
    dateUntil: "",
    jobTitle: "",
    jobOverview: ""

  }]);
  const [jobList, setJobList] = useState([])


  function WorkExperienceDetails() {
    return (
      <div className="workExperienceDetails">
        {jobList.map((state) => (
          <WorkExpTemplate
            key={state.id}
            companyName={state.companyInput}
            dateF={state.dateFrom}
            dateT={state.dateUntil}
            jobT={state.jobTitle}
            jobDesc={state.jobOverview}
          />
        ))}
      </div>
    );
  }

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
    console.log(jobList)
  }

  function handleCloseClick() {
    setModalVisible(false);
    resetState();
    console.log(jobInfo);
  }

// on clicking save, a new div should be created within workExp div called WorkExperienceDetails  
  function handleSaveClick() {
    setModalVisible(false);
    setJobList([...jobList, jobInfo]);
    console.log(jobList)
    
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
