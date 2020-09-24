const EmployeeList = require('./employee');

let employeeList = new EmployeeList();
// beforeEach(() => {
//   employeeList = new EmployeeList();
//   employeeList.addEmployee('Prince', 1000000);
// });

// afterEach(() => {});

beforeAll(() => {
  login();
});

afterAll(() => {
  logout();
});

// Add employee test
// Add employee {name: 'Shubhangi', salary: 1000000}
test('Add valid employee', () => {
  employeeList.addEmployee('Shubhangi', 1000000);
  const updatedList = employeeList.getEmployeeList();
  const shubhangiEmployee = updatedList.find(function (elem) {
    return elem.name === 'Shubhangi' && elem.salary === 1000000;
  });
  expect(shubhangiEmployee).toBeTruthy();
});

// Remove valid employee
test('Remove Valid employee', () => {
  employeeList.removeEmployee('Prince');
  const updatedList = employeeList.getEmployeeList();
  expect(updatedList).toEqual([]);
});
