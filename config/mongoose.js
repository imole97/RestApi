//require .env library which loads all our enviroment variable from .env
const mongoose = require('mongoose')

//connect mongoose to database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
// .then(()=> console.log('db connected'))