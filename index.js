// Write your solution in this file!
const employee = {
    name: "Mike",
    streetAddress: "12 address rd"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key, value) => {
    const newObj = {...employee};
    newObj[key] = value;
    delete newObj.key;
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key, value) => {
    employee[key] = value;
    return employee;
}