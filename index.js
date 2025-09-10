const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// 


const convert = require('./lib/converter');
const manual = require('./lib/manual');


rl.question('input date! ', (input) => {

    
    convert.convert(input);
    // manual.manual(input)
    rl.close();

});