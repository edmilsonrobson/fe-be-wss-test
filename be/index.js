const WebSocket = require("ws");

const PORT = "8080";
const SLEEP_BETWEEN_REQUESTS = 1000;

const wss = new WebSocket.WebSocketServer({
  port: PORT,
});

wss.on("connection", (socket) => {
  console.log("Got a new connection!");

  socket.on("message", (data) => {
    const parsedData = JSON.parse(data);

    if (parsedData.type === "replyCounter") {
      const { count } = parsedData;
      console.log(`Got counter value: ${count}`);
    }
  });
});

setInterval(() => {
  const data = JSON.stringify({
    type: "askCounter",
  });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}, SLEEP_BETWEEN_REQUESTS);

console.log(`Listening on port ${PORT}`);
