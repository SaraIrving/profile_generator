

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answersArray = [];
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  answersArray.push(answer);
  
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answersArray.push(answer);
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      answersArray.push(answer);
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        answersArray.push(answer);
        
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          answersArray.push(answer);
          
          rl.question('Which sport is your absolute favourite?', (answer) => {
            answersArray.push(answer);
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              answersArray.push(answer);
              
              rl.close();
              console.log(
              `${answersArray[0]} enjoys ${answersArray[1]} while listening to some sweet sweet ${answersArray[2]}. ${answersArray[0]}'s fav meal is ${answersArray[3]} especially if it's ${answersArray[4]}! You can often find ${answersArray[0]} doing ${answersArray[5]}. Everyone has a super power, ${answersArray[0]}'s is ${answersArray[6]}`);
            });
          });
        });
      });
    });
  });
});

