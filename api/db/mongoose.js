// This file will handle connection logic to MongoDB 

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://test12345:test12345@cluster0.bdwrb.mongodb.net/TaskManager?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e)
});

// To prevent deprecation warnings (from MongoDB Native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}