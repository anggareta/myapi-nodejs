var config = require('./dbconfig');
const sql = require('mssql');

async function getEmployees() {
  try {
    let pool = await sql.connect(config);
    let employee = await pool.request().query("select * from Employees");
    return employee.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function getEmployee(empId) {
  try {
    let pool = await sql.connect(config);
    let employee = await pool.request()
      .input('param', sql.Int, empId)
      .query("select * from Employees where ID = @param");
    return employee.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function addEmployee(emp) {
  try {
    let pool = await sql.connect(config);
    let insertEmployee = await pool.request()
      .input('Name', sql.VarChar, emp.Name)
      .input('Location', sql.VarChar, emp.Location)
      .execute('usp_InsertEmployeeTest');
    return insertEmployee.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  baca: getEmployees,
  bacasatu: getEmployee,
  tulis: addEmployee
}