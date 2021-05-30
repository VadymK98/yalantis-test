import React from "react";
import "../style/ActiveEmployees.css";

export default function ActiveEmployees({ employees }) {
  let isEmpty = true;
  return (
    <div className="RigthWrapper">
      <h2 className="hello">Active employees</h2>
      <div className="ActiveEmployees">
        {Object.entries(employees).map(([key, value]) => {
          if (value.length !== 0) {
            if (isEmpty) {
              isEmpty = false;
            }
            return (
              <div className="MonthDisplay" key={key}>
                <h3>{key}</h3>
                {value.map(({ fullName, bdDate, id }) => (
                  <div className="ActiveEmployeePanel" key={`active-${id}`}>
                    {`${fullName} - ${bdDate}`}
                  </div>
                ))}
              </div>
            );
          } else { return ''; }
        })}
        {
          isEmpty ? <p>Employees list is empty</p> : ''
        }
      </div>
    </div>
  );
}
