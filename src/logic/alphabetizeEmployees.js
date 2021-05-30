export default function alphabetizeEmployees(employees) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let employeesAlphabetized = {};

  [...alphabet].forEach((letter) => (employeesAlphabetized[letter] = []));
  employees.forEach(function ({ lastName, firstName, id, isActive }) {
    const firstLetter = lastName[0];
    const employeeObj = {
      fullName: `${lastName} ${firstName}`,
      id,
      isActive,
    };
    employeesAlphabetized[firstLetter].push(employeeObj);
  });
  return employeesAlphabetized;
}
