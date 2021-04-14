var axios = require('axios');
const response = require("../../models/response/response");
const nodemailer = require("nodemailer");
const { urlencoded } = require("body-parser");
const ApplianceController = { 
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
        res.send(response.data)
      })
      .catch(function (error) { 
        res.status(response.status).send(error)
      });
    },
    getIssues: (req, res) => {  
      var config = {
        method: 'get',
        url: 'https://admin.polartechappliance.ca/wp-json/wp/v2/issues?per_page=100',
        headers: { 
          'Authorization': 'Basic YWRtaW5vbGVnOmFkbWlub2xlZyFAIw==', 
          'Content-Type': 'text/plain'
        },
        data : {}
      };
      axios(config) 
      .then(function (response) { 
        res.send(response.data)
      })
      .catch(function (error) { 
        res.status(response.status).send(error)
      });
    },
    getAppliance: (req, res) => {  
      var config = {
        method: 'get',
        url: 'https://admin.polartechappliance.ca/wp-json/wp/v2/appliances',
        headers: { 
          'Authorization': 'Basic YWRtaW5vbGVnOmFkbWlub2xlZyFAIw==', 
          'Content-Type': 'text/plain'
        },
        data : {}
      };
      axios(config) 
      .then(function (response) { 
        res.send(response.data)
      })
      .catch(function (error) { 
        res.status(response.status).send(error)
      });
    },
    getPages: (req, res) => {  
      var config = {
        method: 'get',
        url: 'https://admin.polartechappliance.ca/wp-json/wp/v2/pages?id=32',
        headers: { 
          'Authorization': 'Basic YWRtaW5vbGVnOmFkbWlub2xlZyFAIw==', 
          'Content-Type': 'text/plain'
        },
        data : {}
      };
      axios(config) 
      .then(function (response) { 
        res.send(response.data)
      })
      .catch(function (error) { 
        res.status(response.status).send(error)
      });
    }, 
}
module.exports = ApplianceController;
