const mongoose = require('mongoose');

const url = "mongodb+srv://rishavv7:rishavv7@cluster0.q62ev.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected ');
}).catch((err) => {
    console.log(err);
}); 


module.exports=mongoose;