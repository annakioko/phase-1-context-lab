/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function allWagesFor() {
  let datesWorked = this.timeInEvents.map(event => event.date);
  let totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
  return totalWages;
}

 function createEmployeeRecord(employeeRecord) {
  const employee = {
      'firstName': employeeRecord[0],
      'familyName': employeeRecord[1],
      'title': employeeRecord[2],
      'payPerHour': employeeRecord[3],
      'timeInEvents': [],
      'timeOutEvents': []
  };
  return employee;
}

function createEmployeeRecords(employeeRecords) {
  const employees = employeeRecords.map(record => createEmployeeRecord(record));
  return employees;
}

function createTimeInEvent(date) {
  this.timeInEvents.push({
      type: "TimeIn",
      date: date.slice(0, 10),
      hour: parseInt(date.slice(-4))
  })
  
  return this;
}

function createTimeOutEvent(date) {
  this.timeOutEvents.push({
      type: "TimeOut",
      date: date.slice(0, 10),
      hour: parseInt(date.slice(-4))
  })
  
  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(event => event.date === date);
  let timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(hoursWorked) {
  let wageEarned = hoursWorkedOnDate.call(this, hoursWorked) * this.payPerHour;
  return parseFloat(wageEarned.toString());
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(function (employee) {
    return employee.firstName === firstNameString;
  });
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(function(total, employee) {
      return total + allWagesFor.call(employee);
  },0)
}

