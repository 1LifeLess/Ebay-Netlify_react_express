const express = require('express');
//const bodyParser = require('body-parser')
const path = require('path');
const fetch = require('node-fetch').default;
require('dotenv').config();
const json = require('./data.json')
//const noResult = require('./noResult.json')
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});


router.post('/getToken', (req, res) => {
  console.log("Server req.body.code ", req.body.code)
  fetch("https://api.sandbox.ebay.com/identity/v1/oauth2/token", {
    headers: {
      'Authorization': 'Basic dG9tZXJzaGEtc3RvcmUtU0JYLThlNjRlOWYyMi0wYzgyZWQwYjpTQlgtZTY0ZTlmMjIyNzQ4LTdmODMtNGZjMi05MTA5LThkN2I=',//tomersha-store-SBX-8e64e9f22-0c82ed0b:SBX-e64e9f222748-7f83-4fc2-9109-8d7b',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: "POST",
    body:
      'grant_type=authorization_code&' +
      'code=' + req.body.code +
      '&redirect_uri=tomer_shani-tomersha-store--trsqvdhhl'
  }).then(response => {
    console.log("code response = ", response)
     return response.json()
   }).then(data => {
    //console.log("Server Key " ,data)
    process.env['TOKEN_OBJ'] = JSON.stringify(data)
    console.log('process.env.TOKEN_OBJ = ', process.env.TOKEN_OBJ)
    let obj = JSON.parse(process.env.TOKEN_OBJ)
    if(obj.hasOwnProperty('error')) {
      console.log("JSON.parse(process.env.TOKEN_OBJ).hasOwnProperty('error')",JSON.parse(process.env.TOKEN_OBJ).hasOwnProperty('error'))
     return res.sendStatus(401)
   }
    res.sendStatus(200)
  }).catch((error) => {
    console.error('ERROR Get Token = ', error)
    // res.status(400).send('somethign went wrong in Auth process');
  })
})



router.get('/TestgetKey', (req, res) => {
  return fetch('https://www.anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      console.log("Test data_ : ", data)
      res.send({ 'key': '==vkdsld1' })
    })
  // console.log("post")
  // res.send({'key':'==vkdsld'})
});

router.get('/fetchItems/searchTxt/:searchTxt', (req, res, next) => {
res.send(json) //for dev environment
  //-------------------------------------------------------------------------------------------------------------------------------------
   console.log('req = https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=' + req.params.searchTxt + '&limit=100')
  //console.log('fetch Items process.env.TOKEN_OBJ = ' , process.env.TOKEN_OBJ)
  //console.log('fetch Items process.env.TOKEN_OBJ.access_token = ' , JSON.parse(process.env.TOKEN_OBJ).access_token)
  fetch('https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=' + req.params.searchTxt + '&limit=100', {
    headers: {
      'Authorization': 'Bearer ' + JSON.parse(process.env.TOKEN_OBJ).access_token,
      'Content-Type': 'application/json',
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
      'X-EBAY-C-ENDUSERCTX': 'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'
    }
  }
  ).then(response => {
    //console.log("res headers"+JSON.stringify(response.headers))
    //console.log("req headers"+JSON.stringify(req.headers))
    return response.json()// {total:0} //

  }).then(data => {
    console.log("response data after token data.total = ", data.total)
    if (data.total == 0) {
      console.log("data.total==0", data.total == 0)
      res.statusMessage = 'no result, please search for something else'
      res.status(401).end()
      return 
    }
    // console.log("I get to server Filter, data = ",data)
    const fData = data.itemSummaries.filter(item => item.image && item.image.imageUrl)
    res.send(fData)
  }).catch((error) => {
    console.error('ERROR Server fetchItems = ', error);
  })
})

app.use('/.netlify/functions/server', router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);