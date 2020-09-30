const employee = require("./employee");
const EmployeeList = require("./employee");

let employeeList = new EmployeeList();
// beforeEach(() => {
//   employeeList = new EmployeeList();
//   employeeList.addEmployee('Prince', 1000000);
// });

// // afterEach(() => {});

// beforeAll(() => {
//   login();
// });

// afterAll(() => {
//   logout();
// });

/* Add employee test
1. Add employee {name: 'Shubhangi', salary: 1000000} to the empty array
2. Enter employee name as Number=> Throw error
3. Add space between name - It should get passed
4. Pass empty object while adding new employee 
 */

test("Add valid employee", () => {
  employeeList.addEmployee("Shubhangi", 1000000);
  const updatedList = employeeList.getEmployeeList();
  const shubhangiEmployee = updatedList.find(function (elem) {
    return elem.name === "Shubhangi" && elem.salary === 1000000;
  });
  expect(shubhangiEmployee).toBeTruthy();
});

test("Add invalid employee", () => {
  var invalid = { name: 124345, salary: "5456" };
  expect(() => {
    employeeList.addEmployee(invalid).toThrow();
  });
});

test("Add space between name", () => {
  employeeList.addEmployee("Ram Sharma", 8000000);
  const updatedList = employeeList.getEmployeeList();
  if (updatedList.includes("Ram Sharma")) {
    expect(updatedList).toBeTruthy();
  }
});

test(" Pass empty string while adding new employee", () => {
  expect(() => {
    employeeList.addEmployee("").toThrow();
  });
});

/* Get employeelist
1. Try to get employee list when no elements are present in the array- 
2. Try sorting by salary- It should get passed
3. Try sorting after removing employee from the list
4. Try sorting after adding new employee to teh list
*/
// beforeEach(() => {
//   removeEmployee(this.employeeList[i]);

test("Get employee list when no elements are present in the array", () => {
  let expected = [];
  expect(employeeList.getEmployeeList()).toEqual(
    expect.arrayContaining(expected)
  );
});

test("Verify sorting by salary functionality", () => {
  const sortedList = employeeList.getEmployeeList();
  expect(employeeList.getEmployeeList()).toEqual(sortedList);
  console.log(sortedList);
});

test("Try sorting after removing employee from the list", () => {
  employeeList.removeEmployee("Shubhangi");
  const updatedList = employeeList.getEmployeeList();
  expect(employeeList.getEmployeeList()).toEqual(updatedList);
});

test("Try sorting after adding new employee to teh list", () => {
  employeeList.addEmployee("Ramu", 8000);
  const updatedList = employeeList.getEmployeeList();
  expect(employeeList.getEmployeeList()).toEqual(updatedList);
});

/*Try to remove employee if the list is empty- Error must be thrown
Try to remove employee by entering valid name- Test should get passed
Try to remove employee by entering invalid name- Display error
Try to remove employee by passing parameter other than string 
*/

test("Try to remove employee if the list is empty", () => {
  // const updatedList = employeeList.getEmployeeList();
  if (employeeList.getEmployeeList() == []) {
    expect(() => {
      employeeList.removeEmployee("abc").toThrow();
    });
  }
});

test("Try to remove employee by entering valid name", () => {
  const list = employeeList.getEmployeeList();
  if (employeeList.getEmployeeList() != null) {
    expect(employeeList.removeEmployee("Ramu"));
  }
});
