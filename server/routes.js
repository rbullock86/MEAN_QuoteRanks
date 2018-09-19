const path = require("path");
const bp = require("body-parser");
const api = require("./controllers.js");

module.exports = function(app){
    app.use(bp.json());

    app.get("/api/Authors", api.getAuthors);
    app.get("/api/Authors/:id", api.getAuthor);
    app.post("/api/Authors", api.postAuthor);
    app.put("/api/Authors/:id", api.putAuthor);
    app.patch("/api/Authors/:id", api.patchAuthors);

    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}