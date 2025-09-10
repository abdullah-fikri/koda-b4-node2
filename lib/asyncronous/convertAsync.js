const moment  = require('moment');

async function convertAsync(y){
    const masukTanggal = moment(y, 'MM-DD-YYYY');
    if(masukTanggal.isValid()){
        console.log(masukTanggal.format('MM/DD/YYYY'));
    }else {
        throw new Error('error brouh');
    }
}

module.exports = {
    convertAsync
};