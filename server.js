var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
    customerName: "Ben",
    phoneNumber: "041234567",
    customerEmail: "ben@hotmail.com",
    customerID: 900
  },
  {
    customerName: "Picolo",
    phoneNumber: "09977886",
    customerEmail: "pic@dbz.com",
    customerID: 800
  },
  {
    customerName: "Goku",
    phoneNumber: "099887765",
    customerEmail: "goku@dbz.com",
    customerID: 700
  }
];
//web routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});
//api routes
app.post("/api/reserve", function(req,res){
  var newBooking = req.body;
  
  reservations.push(newBooking);

  res.json("Success");
})

app.get("/api/tables", function(req, res) {

  return res.json(reservations);
});

app.listen(PORT, function() {
  console.log("App listening on PORT ", PORT);
});
