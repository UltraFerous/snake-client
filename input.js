// Stores the active TCP connection object.
const { movement, emotes } = require("./constants");
let connection;

// setup interface to handle user input from stdin
const handleUserInput = function(data) {
  if (data.toLowerCase() === movement.moveUp) {
    connection.write('Move: up');
  }
  if (data.toLowerCase() === movement.moveDown) {
    connection.write('Move: down');
  }
  if (data.toLowerCase() === movement.moveLeft) {
    connection.write('Move: left');
  }
  if (data.toLowerCase() === movement.moveRight) {
    connection.write('Move: right');
  }

  if (data.toLowerCase() === "1") {
    connection.write(emotes[1]);
  }
  if (data.toLowerCase() === "2") {
    connection.write(emotes[2]);
  }
  if (data.toLowerCase() === "3") {
    connection.write(emotes[3]);
  }
  if (data.toLowerCase() === "4") {
    connection.write(emotes[4]);
  }
  if (data.toLowerCase() === "5") {
    connection.write(emotes[5]);
  }
  if (data.toLowerCase() === "6") {
    connection.write(emotes[6]);
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