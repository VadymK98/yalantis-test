export default function sortEmployees(employees) {
  let employeesSorted = [...employees];
  employeesSorted.sort((employee1, employee2) =>
    employee1.lastName < employee2.lastName ? -1 : 1
  );
  employeesSorted.forEach((employee) => (employee.isActive = false));
  return employeesSorted;
}
