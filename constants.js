const net = require("net");

const conn = net.createConnection({
  host: "165.227.47.243", // IP address here,
  port: 50541// PORT number here,
});

const IP = conn.host;
const PORT = conn.port;

const movement = {
  moveUp: "w",
  moveDown: "s",
  moveLeft: 'a',
  moveRight: 'd'
};

const emotes = {
  1: "Say: GG",
  2: "Say: Kept you waiting, huh?",
  3: 'Say: Metal Gear?!',
  4: 'Say: Why are you calling me brother?',
  5: 'Say: The Snake is a spy!',
  6: "Say: I leave Sisyphus at the foot of the mountain. One always finds one's burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile. Each atom of that stone, each mineral flake of that night-filled mountain, in itself, forms a world. The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy."
};

module.exports = {
  conn,
  IP,
  PORT,
  movement,
  emotes
};