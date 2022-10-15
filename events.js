const School = require("./school");
const school = new School();
//register a listener for bellRing Event
school.on("bellRing", ({ period, text }) => {
  console.log(`we need to run! because ${period} ${text}`);
});
school.startPeriode();
//raise an Event
// setTimeout(() => {
//   emitter.emit("bellRing", "Second Period"); //single parameter
// }, 2000);

// setTimeout(() => {
//  emitter.emit('bellRing', {
//   period: 'first',
//   text: 'period End'
//  }); //multi parameter
// }, 2000);
