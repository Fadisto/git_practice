const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


const god_data = require('./data.js');

let god_options = ['guan yu', 'pagu', 'jade emperor'];
let god = '';

console.log('Welcome to the God Module...\n\n');

readline.setPrompt('Enter the name of a god. The options are Guan Yu, Pagu and Jade Emperor. They will tell you some wisdom for the day...\n\n');

readline.prompt();

readline.on('line'),function(input){};

while (!(god_options.includes(input))){
  console.log('\n\nIncorrect input, type in one of the names from the list or press CNTRL+C to exit\n\n');
  readline.on(`line`,function(input){});
};

/*readline.on(`line`, function(input) {
  input = input.toLowerCase().trim();
  while (!(god_options.includes(input))) {
    console.log('\n\nIncorrect input, type in one of the names from the list or press CNTRL+C to exit\n\n');
    readline.prompt();
  };
  while (input === 'guan yu'){
    console.log('\n\n' + god_data.guan_Yu[getRandomInt(0,2)]);
    console.log('\n\nTake that wisdom to heart...You can keep receiving wisdom forever... Press CNTRL + C to quit when you\'ve had enough...\n\n');
    readline.prompt();
  };
  while (input === 'pagu'){
    console.log('\n\n' + god_data.pagu[getRandomInt(0,2)]);
    console.log('\n\nTake that wisdom to heart...You can keep receiving wisdom forever... Press CNTRL + C to quit when you\'ve had enough...\n\n');
    readline.prompt();
  };
  while (input === 'jade emperor'){
    console.log('\n\n' + god_data.jade_Emperor[getRandomInt(0,2)]);
    console.log('\n\nTake that wisdom to heart...You can keep receiving wisdom forever... Press CNTRL + C to quit when you\'ve had enough...\n\n');
    readline.prompt();
  };
readline.close();
});*\
