function WorkExpTemplate({ companyName, dateF, dateT, jobT, jobDesc }) {
  return (
    <div className="workExp">
      <h3 className="companyName">{companyName}</h3>
      <h3 className="dateF">{dateF}</h3>
      <h3 className="dateT">{dateT}</h3>
      <h3 className="jobTitle">{jobT}</h3>
      <p className="jobDesc">{jobDesc}</p>
    </div>
  );
}



export { WorkExpTemplate };
