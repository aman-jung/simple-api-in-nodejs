const express = require("express"),
  { ObjectID } = require("mongodb");
(bodyParser = require("body-parser")),
  ({ Info } = require("./models/info")),
  (app = express());
require("./db/config");

app.use(bodyParser.json());
app.get("/getAllInfo", (req, res) => {
  Info.find().then(
    result => {
      res.send(result);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/getAllInfo/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Info.findById(id).then(
    result => {
      if (!result) {
        res.status(400).send();
      }
      res.send(result);
    },
    err => {
      res.status(404).send();
    }
  );
});

app.delete("/data/delete/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Info.findByIdAndRemove(id)
    .then(result => {
      if (!result) {
        return res.status(400).send();
      }
      res.status(200).send(result);
    })
    .catch(e => {
      res.status(400).send();
    });
});
app.post("/information", (req, res) => {
  var newInfo = new Info({
    name: req.body.fullName,
    age: req.body.Age,
    location: req.body.Location
  });
  newInfo.save().then(
    result => {
      res.send(result);
    },
    err => {
      res.status(400).send(err);
    }
  );
});
app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.render("home");
// });

// var myLogger = function(req, res, next) {
//   console.log("Logged");
//   next();
// };

// app.use(myLogger);
// app.listen(3000, () => {
//   console.log("Server is up and running");
// });
