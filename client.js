const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
  });

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

console.log("Connecting ...");

module.exports = {connect};