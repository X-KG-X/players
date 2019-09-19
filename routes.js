//routes
const controller = require("./controllers");
const path = require("path"); 


module.exports = function(app){
    app.get('/players', controller.all)
    app.post('/player', controller.add)
    // app.get('/player/:id', controller.about)
    app.put('/player/:id', controller.update)
    app.delete('/player/:id', controller.delete)
    // app.post('/player/:id',controller.add_quote)
    app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
	});

}
