const { exec } = require('child_process');
v=exec('grep "1|" cities_db');
console.log(v);
