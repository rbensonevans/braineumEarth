
// import exec method from child_process module
const { execSync } = require("child_process");

// execute mkdir command synchronously
// to make a directory with name hello
//const val=execSync("grep '1|' cities_db");
//const val=execSync("echo 'hello'");
const val=spawnSync("echo 'hello'");

console.log(val.stdout);
