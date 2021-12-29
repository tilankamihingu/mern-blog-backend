const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
<<<<<<< HEAD
const path = require('path')
=======
>>>>>>> 59651ad85a9dc22db49773fd3340d8f8628878f7

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection
connection.once("open", ()=>
     console.log("mongodb connected successfully")
);

const articleRouter = require('./routes/articals');
app.use('/articles', articleRouter);

<<<<<<< HEAD
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

=======
>>>>>>> 59651ad85a9dc22db49773fd3340d8f8628878f7
app.listen(port, ()=> console.log(`The app is running on port ${port}`))