// setup interface to handle user input from stdin
const handleUserInput = function(data) {
  if (data.toLowerCase() === "w") {
    console.log('move up');
  }
  if (data.toLowerCase() === "s") {
    console.log('move down');
  }
  if (data.toLowerCase() === "a") {
    console.log('move left');
  }
  if (data.toLowerCase() === "d") {
    console.log('move right');
  }

  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };