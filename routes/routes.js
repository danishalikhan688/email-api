var express = require("express"); 
var router = express.Router(); 
const EmailController = require("../controller/email/Email"); 
const ApplianceController = require("../controller/appliance/Appliance");
const routes = { 
 
    '/email/sendEmail': function(req, res) {
        EmailController.sendEmail(req, res);
    } ,
    '/email/sendAppliancedEmail': function(req, res) {
        EmailController.sendApplianceEmail(req, res);
    } ,

    // Appliance point
    '/appliance/brands': function(req, res) {
        ApplianceController.getBrands(req, res);
    } ,
    '/appliance/issues': function(req, res) {
        ApplianceController.getIssues(req, res);
    } ,
    '/appliance/appliance': function(req, res) {
        ApplianceController.getAppliance(req, res);
    } ,
    '/appliance/pages': function(req, res) {
        ApplianceController.getPages(req, res);
    } ,
    
    
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