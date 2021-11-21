var shell = require('shelljs');
shell.exec(`grep "0|" cities_db | sed "s/^.*|"//`);
shell.exec(`grep "1|" cities_db | sed "s/^.*|"//`);
shell.exec(`grep "2|" cities_db | sed "s/^.*|"//`);
shell.exec(`grep "3|" cities_db | sed "s/^.*|"//`);
shell.exec(`grep "4|" cities_db | sed "s/^.*|"//`);
shell.grep('^2', 'cities_db').to('output.txt');
