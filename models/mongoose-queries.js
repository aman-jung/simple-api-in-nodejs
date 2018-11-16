const { ObjectID } = require("mongodb"),
  { mongoose } = require("../db/config"),
  { Info } = require("./info"),
  id = "5bedc0f924ea1226b8eb7ae6";

if (!ObjectID.isValid(id)) {
  return console.log("Your id is incorrect or the length of the id is invalid");
}
Info.findById(id).then(
  result => {
    if (!result) {
      return console.log("Id not found");
    }
    console.log("id is", JSON.stringify(result, undefined, 1));
  },
  err => {
    console.log(err);
  }
);
