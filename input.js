// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const handleUserInput = function(data) {
  if (data.toLowerCase() === "w") {
    connection.write('Move: up');
  }
  if (data.toLowerCase() === "s") {
    connection.write('Move: down');
  }
  if (data.toLowerCase() === "a") {
    connection.write('Move: left');
  }
  if (data.toLowerCase() === "d") {
    connection.write('Move: right');
  }

  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

module.exports = { setupInput };