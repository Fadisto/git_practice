const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let god_options = ['athena', 'zeus', 'imhotep'];
let god = '';

readline.setPrompt('Welcome to the god module. Enter the name of a god. The options are Athena, Zeus and Imhotep. They will tell you some wisdom for the day...\n\n');

readline.prompt();

readline.on(`line`, function(input) {
  input = input.toLowerCase().trim();
  if (!(god_options.includes(input))) {
    console.log('\n\nIncorrect input, select from the list or press CNTRL+C to exit\n\n');
    readline.prompt();
  } else {
    god = input;
    console.log(god);
    console.log(`Input was Correct`);
    readline.close();
  };
});
