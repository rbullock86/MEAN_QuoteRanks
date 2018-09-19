const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        minlength: [4, "Backend Val: Quotes must be worthy (at least 4 characters)"]
    },
    votes: {
        type: Number,
        default: 0
    }
})
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "Backend Val: Product names need to be at least 4 characters long."]
    },
    quotes: [QuoteSchema]
}, { timestamps: true })

mongoose.connect("mongodb://localhost:27017/mean_quoteranks_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));

const Author = mongoose.model('author', AuthorSchema);

module.exports = { Author };