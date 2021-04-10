const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routes")
const cors = require("cors"); 
const startServer = () => {
    app.use(cors({ origin: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
  
    app.use(router);
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, function() {
        console.log(`Server started on port ${PORT}`);
    });
}
module.exports = startServer