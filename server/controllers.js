const { Author } = require("./models");

module.exports = {
    getAuthors : (req, res) => Author.find({})
                                       .then(data => console.log("controllers: getAuthors", data) || res.json(data))
                                       .catch(errs => console.log("controllers: getAuthors had errors", errs) || res.json(errs)),
    getAuthor : (req, res) => Author.findById(req.params.id)
                                      .then(data => console.log("controllers: getAuthor", data) || res.json(data))
                                      .catch(errs => console.log("controllers: getAuthor had errors", errs) || res.json(errs)),
    postAuthor : (req, res) => Author.create(req.body)
                                         .then(data => console.log("controllers: createAuthor", data) || res.json(data))
                                         .catch(errs => console.log("controllers: createAuthor had errors", errs) || res.json(errs)),
    putAuthor : (req, res) => Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true })
                                         .then(data => console.log("controllers: putAuthor", data) || res.json(data))
                                         .catch(errs => console.log("controllers: putAuthor had errors", errs) || res.json(errs)),
    patchAuthor : (req, res) => Author.findByIdAndUpdate(req.params.id, req.body, {runValidatiors: true, new: true})
                                      .then(data => console.log("controllers: patchAuthor", data) || res.json(data))
                                      .catch(errs => console.log("controllers: patchAuthor had errors", errs) || res.json(errs))
    
}