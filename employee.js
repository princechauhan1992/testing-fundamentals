// interface Employee {
//     name: string,
//     salary: number
// }
// //Employee Names must be unique
// interface EmployeeList {
//     // Return true if add succeeds else throw error
//     addEmployee({ name: string, salary: number});
//     // Return employee list sorted by salaries
//     getEmployeeList() : { name: string, salary: number}[];
//     // Return employee List sorted by salaries
//     searchEmployee(searchString);
//     // Return true if delete succeeds else throw error
//     removeEmployee();
// }

class employee {

    var employeeList = [
      { name: "Ram", salary: 30000 },
      { name: "Shyam", salary: 40000 },
      { name: "Tanu", salary: 50000 },
    ];
    let arraylength = employeeList.length;

    // Return true if add succeeds else throw error
    function addEmployee(name, salary) {
      employeeList.push(name, salary);
      if (arraylength < employeeList.length) {
        console.log(true);
      } else {
        throw new Error("Unsuccessfull");
      }
    }
    // Return employee list sorted by salaries
    function getEmployeeList(employeeList) {
      for (let i = 0; i < employeeList.length; i++) {
        for (let j = i + 1; j < employeeList.length; j++) {
          if (employeeList.salary[i] > employeeList.salary[j]) {
            let x = employeeList.salary[i];
            employeeList.salary[i] = employeeList.salary[j];
            employeeList.salary[j] = x;
          }
        }
      }
    }

    // Return true if delete succeeds else throw error
    function removeEmployee() {
      delete employeeList[employeeList.length - 1];
      if (employeeList.length == employeeList) {
        console.log(true);
      } else {
        throw new Error(" Element not deleted");
      }
    }
    addEmployee("manu", 60000);
    getEmployeeList(employeeList);
    removeEmployee();
  
}
