const mongoose = require('mongoose') 


//creating a database
mongoose.connect('mongodb://localhost/spendingTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) //spendingTracker is the Mongo DB name 
// The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal 
    .then(()=>console.log('connected to the spending Tracker whoop whoop!! '))
    .catch((err) => console.log(err)) 