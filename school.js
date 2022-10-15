const EventEmitter = require("events");
class School extends EventEmitter {
  startPeriode() {
    console.log("class Start");
    setTimeout(() => {
      this.emit("bellRing", {
        period: "first",
        text: "period End",
      }); //multi parameter
    }, 2000);
  }
}
module.exports = School;
