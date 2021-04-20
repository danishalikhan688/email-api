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
     
    getBrands: (req, res) => {  
      var config = {
        method: 'get',
        url: 'https://admin.polartechappliance.ca/wp-json/wp/v2/brands',
        headers: { 
          'Authorization': 'Basic YWRtaW5vbGVnOmFkbWlub2xlZyFAIw==', 
          'Content-Type': 'text/plain'
        },
        data : {}
      };
      axios(config) 
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        res.send(response)
      })
      .catch(function (error) {
        console.log(JSON.stringify(error))
        res.status(response.status).send(error)
      });
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

// var transport = nodemailer.createTransport({
//   host: "giowm1236.siteground.biz",
//   port: 995 ,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "info@polartechappliance.ca", // generated ethereal user
//     pass: "23@dJnf32J>e", // generated ethereal password
//   },
// });