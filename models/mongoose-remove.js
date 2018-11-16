const { ObjectID } = require("mongodb"),
  { mongoose } = require("../db/config"),
  { Info } = require("./info"),
  id = "5bef1cb778aea8234c5179a2";

// Info.remove({})
//   .then(result => {
//     console.log("result is", result);
//   })
//   .catch(e => {
//     console.log("error is", e);
//   });

// Info.findOneAndRemove({
//   _id: id
// }).then(result => {
//   console.log("deleted is", result);
// });

Info.findByIdAndRemove(id).then(result => {
  console.log("deleted is", result);
});
