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
  constructor() {
    this.employeeList = [
      { name: "Ram", salary: 30000 },
      { name: "Shyam", salary: 40000 },
      { name: "Tanu", salary: 50000 },
    ];
  }

  addEmployee(name, salary) {
    if (
      this.employeeList.find(function (elm) {
        if (elm.name == name) {
          return true;
        }
      })
    ) {
      throw new Error("Duplicate name");
    }
    if (typeof name !== "string" || typeof salary !== "number") {
      throw new Error("name must be a string, received:" + typeof name);
    }

    this.employeeList.push({ name, salary });
    return true;
  }

  // Return employee list sorted by salaries
  getEmployeeList() {
    for (let i = 0; i < this.employeeList.length; i++) {
      for (let j = i + 1; j < this.employeeList.length; j++) {
        if (this.employeeList[i].salary > this.employeeList[j].salary) {
          let x = this.employeeList[i];
          this.employeeList[i] = employeeList[j];
          this.employeeList[j] = x;
        }
      }
    }
    return this.employeeList;
  }

  // Return true if delete succeeds else throw error
  removeEmployee(name) {
    for (var i in this.employeeList) {
      if (this.employeeList[i].name == name) {
        this.employeeList.splice(i, 1);
      }
    }
  }
}

let employeeData = new employee();
employeeData.addEmployee("abc", 60000);
console.log(employeeData.getEmployeeList());
employeeData.removeEmployee("Ram");
console.log(employeeData.getEmployeeList());
