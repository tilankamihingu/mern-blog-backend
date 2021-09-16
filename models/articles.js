const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artiicalSchema = new Schema({
    title: {
        type: String, required:true
    },
    article: {
        type: String, required:true
    },
    authorname: {
        type: String, required:true
    }
})

const Articles = mongoose.model("Articles", artiicalSchema);

module.exports = Articles;