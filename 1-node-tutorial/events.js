const EventEmitter = require("events");

const eventObj = new EventEmitter();
eventObj.on("response", () => {
  console.log("Response");
});

eventObj.emit("response");
