const { exec } = require('child_process');
exec('grep "1|" cities_db', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`${stdout}`);
   //console.log(`stdout: ${stdout}`);
   //console.log(`stderr: ${stderr}`);
  }
});

console.log("hello world");
