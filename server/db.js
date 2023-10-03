const mongoose = require('mongoose');
const connectDatabasae = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log(`MongoDB connected with server sucessfully`))
    .catch((err)=>console.log(err))
}

module.exports=connectDatabasae;