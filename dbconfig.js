const config = {
  user: "sa",
  password: "mansek03",
  server: "10.82.15.16",
  database: "SMS",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    encrypt: false,
    trustServerCertificate: true,
  },
  port: 1433
}

module.exports = config;