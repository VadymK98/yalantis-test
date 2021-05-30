export default function sortEmployeesByDOB(employees) {
  const months = [
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
  ];
  let employeesSorted = {};
  months.forEach((month) => (employeesSorted[month] = []));
  employees.forEach(({ lastName, firstName, dob, id, isActive }) => {
    if (isActive) {
      const dobObj = new Date(dob);
      const month = months[(dobObj.getMonth() + 4) % 12];
      const day = dobObj.getDay();
      const year = 1900 + dobObj.getYear();
      const employeeObj = {
        fullName: `${lastName} ${firstName}`,
        bdDate: `${month} ${day}, ${year}`,
        id,
      };
      employeesSorted[month].push(employeeObj);
    }
  });
  return employeesSorted;
}
