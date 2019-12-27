 let alphabet = require('./alphabet.json');

process.stdin.setEncoding('utf-8');

 process.stdin.on('data', (english) => {
    let convertString = '';

     for(let i = 0; i < english.length; ++i) {
	let ch = alphabet[english[i]];
 	convertString += ch ? ch : english[i];
    }

    process.stdout.write(convertString);

});
