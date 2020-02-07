#!/usr/bin/env node
const help = require("./cmds/help");
const today = require("./cmds/today");
const forecast=require("./cmds/forcast")
const minimist=require("minimist")
const input = process.argv.slice(2);
const passedInput=minimist(input)
const location = passedInput.l||passedInput.location
const cmd = passedInput["_"][0];
if (cmd == "today") {
  today(location);
} else if (cmd == "forecast") {
    forecast(location)
} else if ((cmd == "help")) {
  help();

} else if (cmd == "version") {
  console.log("v 1.0.0")

} else {
  console.log("Wrong Command");
}
