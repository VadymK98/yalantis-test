import { useState, useEffect } from "react";
import EmployeesList from "./components/EmployeesList";
import ActiveEmployees from "./components/ActiveEmployees";
import sortEmployees from "./logic/sortEmployees";
import alphabetizeEmployees from "./logic/alphabetizeEmployees";
import sortEmployeesByDOB from "./logic/sortEmployeesByDOB";

import "./index.css";
import "./style/App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [employees, setEmployees] = useState([]);

  function setEmployeeStatus(id) {
    return function (isActive) {
      var newData = employees.map((employee) =>
        employee.id === id ? { ...employee, isActive } : employee
      );
      setEmployees(newData);
      localStorage.setItem("employees", JSON.stringify(newData));
    };
  }

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("employees"));
    if (savedState) {
      setEmployees(savedState);
      setIsLoaded(true);
    } else {
      fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            const employeesSorted = sortEmployees(result);
            setEmployees(employeesSorted);
            localStorage.setItem("employees", JSON.stringify(employeesSorted));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  if (error) {
    return (
      <div className="App">
        <p>Error: {error.message}</p>
      </div>
    );
  } else if (!isLoaded || employees.length === 0) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <EmployeesList
          employees={alphabetizeEmployees(employees)}
          setEmployeeStatus={setEmployeeStatus}
        />
        <ActiveEmployees employees={sortEmployeesByDOB(employees)} />
      </div>
    );
  }
}

export default App;
