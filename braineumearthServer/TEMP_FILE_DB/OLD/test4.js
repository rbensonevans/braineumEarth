const execSync = require('child_process').execSync;
code = execSync('node -v');
console.log(code);
