var express = require("express");
var router = express.Router(); 
const EmailController = require("../controller/email/Email"); 

const routes = { 
 
    '/email/sendEmail': function(req, res) {
        EmailController.sendEmail(req, res);
    } ,
    // '/email/sendAppliancedEmail': function(req, res) {
    //     EmailController.sendApplianceEmail(req, res);
    // } ,
  
}

router.use("/", function(req, res) {
    const path = req.path;
    if (routes[path] === undefined) {
        res.status(200).send("No Such Endpoint Exists")
        return;
    }
    routes[path](req, res);
})
module.exports = router