const EventEmitter = require('events');
// const { setTimeout } = require('timers/promises');
const emitter = new EventEmitter();

//register a listener for bellRing Event
emitter.on('bellRing', ({ period, text }) => {
 console.log(`we need to run! because ${period} ${text}`);
})

//raise an Event
setTimeout(() => {
 emitter.emit('bellRing', 'Second Period'); //single parameter
}, 2000);

setTimeout(() => {
 emitter.emit('bellRing', {
  period: 'first',
  text: 'period End'
 }); //multi parameter
}, 2000);
