var axios = require('axios');
const response = require("../../models/response/response");
const nodemailer = require("nodemailer");
const { urlencoded } = require("body-parser");
const EmailController = {

  sendEmail: (req, res) => {  
    console.log("this is here in send email ")  
        res.end(
          JSON.stringify({
            status: "ok",
            message: error,
          })
        ); 
  }, 
     
    

  sendApplianceEmail: (req, res) => { 
    res.writeHead(200, { "Content-Type": "application/json" });   
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'danishalikhan688@gmail.com',
        pass: 'toargrqdrkjuxkmt'
      }
    }); 
    var mailOptions = {
      from: 'danishalikhan688@gmail.com',
      to: req.body.email,
      subject: req.body.subject,
      html: req.body.template
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
            res.end(
              JSON.stringify({
                status: "not okay ",
                message: error,
              })
            );
          } else {
            res.end(
              JSON.stringify({
                status: "ok",
                message: info.response,
              })
            );
          }
    });

  },



}
module.exports = EmailController;
