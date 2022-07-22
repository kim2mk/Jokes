const express = require("express");
const port = 8000;
const app = express();

require("./server/config/mongoose.config")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("./server/routes/jokes.routes")(app);



app.listen(port, () => console.log(`Listening on port: ${port}`));