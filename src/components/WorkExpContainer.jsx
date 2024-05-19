import { AddNewButton } from "./AddNewButton";
import { WorkExpTemplate } from "./WorkExpTemplate";
import { WorkExpModal } from "./WorkExpModal";
import { useState } from "react";
import { v4 as uuidv4} from 'uuid'


function WorkExpContainer() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempJobInfo, setTempJobInfo] = useState([{
    id: "",
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
  function resetTempState() {
    setTempJobInfo({
    id: "", 
    companyInput: "",
    dateFrom: "",
    dateUntil: "",
    jobTitle: "",
    jobOverview: ""
    })
  }

  function handleOpenClick() {
    setTempJobInfo({id: uuidv4()})
    setModalVisible(true);
    console.log(tempJobInfo);
    console.log(jobList)
  }

  function handleCloseClick() {
    setModalVisible(false);
    resetTempState();
    console.log(tempJobInfo);
  }

// on clicking save, a new div should be created within workExp div called WorkExperienceDetails  
  function handleSaveClick() {
    setModalVisible(false);
    setJobList([...jobList, tempJobInfo]);
    console.log(jobList)
    
  }

// need to create if / case for to handle data coming from different input sources
function handleStateChange(input, source) {
  if (source === "companyInput") {
    setTempJobInfo({...tempJobInfo, companyInput: input})
  } else if (source === "dateFrom") {
    setTempJobInfo({...tempJobInfo, dateFrom: input})
  } else if (source === "dateUntil") {
    setTempJobInfo({...tempJobInfo, dateUntil: input})
  } else if (source === "jobTitle") {
    setTempJobInfo({...tempJobInfo, jobTitle: input})
  } else if (source === "jobOverview") {
    setTempJobInfo({...tempJobInfo, jobOverview: input})
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
