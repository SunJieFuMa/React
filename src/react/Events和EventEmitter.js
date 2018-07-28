import events from 'events'

let em = new events.EventEmitter();
let count = 0;

setInterval(function () {
    em.emit('time', count++)
}, 3000);

em.on('time', function (data) {
    console.log('time ' + data)
});



