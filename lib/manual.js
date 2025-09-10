function manual(input){
    if(input[9] && input[2] == '-' && input[5] == '-'){
        let kedua = input[2] = '/';
        let kelima = input[5] = '/';
        console.log(`${input[0]}${input[1]}${kedua}${input[3]}${input[4]}${kelima}${input[6]}${input[7]}${input[8]}${input[9]}`);
    }else {
        console.log('error broh');
    }
}

module.exports= {
    manual
};