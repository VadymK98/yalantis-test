import '../style/EmployeePanel.css';

export default function EmployeePanel({
  fullName,
  isActive,
  setEmployeeStatus,
}) {
  function handleChange(e) {
    const isActive = e.target.value === "active" ? true : false;
    setEmployeeStatus(isActive);
  }

  return (
    <div className="EmployeePanel">
      <h5>{fullName}</h5>
      <div className="RadioButtons" onChange={handleChange}>
        <div>
          <input
            value="active"
            type="radio"
            name={`${fullName} status`}
            defaultChecked={isActive}
          />{" "}
          Active
        </div>
        <div>
          <input
            value="inactive"
            type="radio"
            name={`${fullName} status`}
            defaultChecked={!isActive}
          />{" "}
          Inactive
        </div>
      </div>
    </div>
  );
}
