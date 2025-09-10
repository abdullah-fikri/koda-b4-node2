const moment  = require('moment');

function convert(y){
    const masukTanggal = moment(y, 'MM-DD-YYYY');
    if(masukTanggal.isValid()){
        console.log(masukTanggal.format('MM/DD/YYYY'));
    }else {
        console.log('harus angka');
    }
}

module.exports = {
    convert
};