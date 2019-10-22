require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(process.env.PORT || 3000, function() {
  console.log("server is up and running");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.get("/failure", function(req, res) {
  res.sendFile(__dirname + "/failure.html");
});
app.get("/success", function(req, res) {
  res.sendFile(__dirname + "/success.html");
});

app.post("/", function(req, res) {
  var fName = req.body.fName;
  var lName = req.body.lName;
  var email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fName,
        LNAME: lName
      }

    }]
  };
  var jsonData = JSON.stringify(data);
  const URL="https://us20.api.mailchimp.com/3.0/lists/"+process.env.CLIENT_AUDIENCEID;
  const authorization= "Moazzam "+process.env.CLIENT_APIKEY;
  var options = {
    url: URL,
    method: "POST",
    headers: {
      "Authorization":authorization
    },
    body: jsonData

  };
  request(options, function(error, response, body) {
    if (error) {
      response.redirect("/failure");
    } else {
      if (response.statusCode === 200) {
        console.log("ASdasd");
        res.redirect("/success");
      } else {
        res.redirect("/failure");
      }

    }
  })
});
app.post("/success", function(req, res) {
  res.redirect("/");
})
