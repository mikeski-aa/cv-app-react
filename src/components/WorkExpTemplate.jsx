function WorkExpTemplate({
  companyName,
  dateF,
  dateT,
  jobT,
  jobDesc,
  actionEdit,
  actionDelete,
}) {
  return (
    <div className="jobCard">
      <h3 className="companyName">{companyName}</h3>
      <h3 className="dateF">{dateF}</h3>
      <h3 className="dateT">{dateT}</h3>
      <h3 className="jobTitle">{jobT}</h3>
      <p className="jobDesc">{jobDesc}</p>
      <div className="cardButtons">
        <button onClick={actionEdit} className="editWorkExpBtn">
          Edit
        </button>
        <button onClick={actionDelete} className="deleteWorkExpBtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export { WorkExpTemplate };
