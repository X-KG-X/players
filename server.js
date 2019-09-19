const express = require("express");
const app = express();
//******test connection */
// app.get('/', (request, response) => {
//    response.send("Hello Express");
// });

// for API
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(1337, () => console.log("listening on port 1337"));

require("./routes")(app)