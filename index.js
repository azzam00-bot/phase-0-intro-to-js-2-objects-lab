// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
const employee = {
  name: 'John',
  age: 30,
  role: 'Developer'
};

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 31);
console.log(updatedEmployee); // { name: 'John', age: 31, role: 'Developer' }

const mutatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'role', 'Senior Developer');
console.log(mutatedEmployee); // { name: 'John', age: 30, role: 'Senior Developer' }

const newEmployee = deleteFromEmployeeByKey(employee, 'age');
console.log(newEmployee); // { name: 'John', role: 'Developer' }

const modifiedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'role');
console.log(modifiedEmployee); // { name: 'John', age: 30 }
