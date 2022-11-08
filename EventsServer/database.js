const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/world_of_events');
mongoose.connect('mongodb+srv://tovifo:nthr1929@cluster0.bzkp9s6.mongodb.net/EVENTSDB?retryWrites=true&w=majority',
 {  
useNewUrlParser: true,
useUnifiedTopology: true
 }

),
()=>{
    try{

    }
    catch(error){
        console.error(error);
    }
};
const connection =mongoose.connection;
connection.once('open',()=>{
    console.log('ok');
}
);