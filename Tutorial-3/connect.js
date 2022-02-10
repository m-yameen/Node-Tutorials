var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Students').then(()=>{
    console.log('DB Connected')
}).catch((e)=>{
    console.log('DB Not Connected')
});