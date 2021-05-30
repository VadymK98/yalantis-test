import EmployeePanel from "./EmployeePanel";
import "../style/EmployeesList.css";

export default function EmployeesList({ employees, setEmployeeStatus }) {
  return (
    <div className="LeftWrapper">
      <h2>Employees</h2>
      <div className="EmployeesList">
        {Object.entries(employees).map(([key, value]) => (
          <div key={key}>
            <h3>{key}</h3>
            <div className="LetterDisplay">
              {value.length !== 0 ? (
                value.map(({ id, fullName, isActive }) => (
                  <EmployeePanel
                    key={id}
                    fullName={fullName}
                    isActive={isActive}
                    setEmployeeStatus={setEmployeeStatus(id)}
                  />
                ))
              ) : (
                <p> ---- </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
