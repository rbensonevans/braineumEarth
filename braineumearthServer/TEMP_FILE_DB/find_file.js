// usage: node find_file.js 4

var shell = require('shelljs');

if (process.argv.length != 3)
{
    console.log("usage: node file number");
    process.exit(0);
}

// command line args: node path arg0 arg1 etc; delete node path
const args = process.argv.slice(2)

var g_regex = "^" + args[0] + ";";
var db_file = "cities_db";
shell.grep(g_regex, db_file).sed(g_regex, "").to('output.txt');

var fs = require("fs");
// Synchronous read
var data = fs.readFileSync('output.txt')
// chop off last char; the newline.
var new_data = data.slice(0,-1);
console.log(new_data.length);
console.log(new_data.toString());
