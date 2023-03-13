const personInfo = require("./information.js");

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `my name is ${personInfo.name} and studying in ${personInfo.compus} `,
    e: "o-",
    T: "U ",
  })
);
