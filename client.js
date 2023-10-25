const { conn, IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  conn.on("connect", () => {
    conn.write("Name: SLD");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // code that does something when the connection is first established
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };