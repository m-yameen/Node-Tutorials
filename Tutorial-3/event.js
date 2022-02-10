var event = require('events')
var em = new event.EventEmitter();
em.on('myevent', function (dob) {
    var yer = dob.split('-');
    var year = new Date().getFullYear()
    var age = year-yer[0]
    if(age>=18)
    {
        console.log('Age is Greater/equal to 18');
    }
    else
    {
        console.log('Age is Less than 18');
    }
});
em.emit('myevent', '2000-03-05');