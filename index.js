const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// 


// const convert = require('./lib/converter');
// const manual = require('./lib/manual');
// const {convertAsync} = require('./lib/asyncronous/convertAsync');
// const { manual } = require('./lib/manual');
const { manualAsync } = require('./lib/asyncronous/manualAsync');


rl.question('input date! ', async (input) => {
  try {
    // await convertAsync(input);
    await manualAsync(input);
  } catch (error) {
    console.log(error);
  }
    
    // convert.convert(input);
    // manual.manual(input);

    rl.close();

});