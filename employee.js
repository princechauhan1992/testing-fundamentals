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

const { returnStatement } = require("@babel/types");
const sort = require("./sort");

class employee {
  constructor() {
    this.employeeList = [];
  }

  addEmployee(name, salary) {
    if (this.employeeList == [{}]) {
      throw new Error("No list found");
    }
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
    if (this.employeeList.length !== 0) {
      for (let i = 0; i < this.employeeList.length; i++) {
        for (let j = i + 1; j < this.employeeList.length; j++) {
          if (this.employeeList[i].salary > this.employeeList[j].salary) {
            let x = this.employeeList[i];
            this.employeeList[i] = this.employeeList[j];
            this.employeeList[j] = x;
          }
        }
      }
    } else {
      console.log("No items in the list");
    }
    return this.employeeList;
  }

  // Return true if delete succeeds else throw error
  removeEmployee(name) {
    if (this.employeeList.length !== 0) {
      for (var i in this.employeeList) {
        if (this.employeeList[i].name == name) {
          this.employeeList.splice(i, 1);
        }
      }
    } else {
      throw new error("Employee list is empty!");
    }
  }

  // //Return employee List sorted by salaries
  // searchEmployee(substr) {
  //   for (var i in this.employeeList) {
  //     if (
  //       this.employeeList[i].filter(function () {
  //         return this;
  //       })
  //     ) {
  //       let sortedList = this.employeeList.sort();
  //       return sortedList;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
}

const r = new employee();
console.log(r.getEmployeeList());
module.exports = employee;
finalOutcome = new employee();
// // console.log(finalOutcome.getEmployeeList());
// console.log(finalOutcome.searchEmployee("abc"));
// console.log(finalOutcome.addEmployee("Shubhangi", 100000));
// console.log(finalOutcome.addEmployee("shubham", 20000));
// console.log(finalOutcome.addEmployee("Tanu", 20000));
// console.log(finalOutcome.searchEmployee("tanu"));
