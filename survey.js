const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  
  rl.question('What do you listen to while doing that? ', (answer2) => {
    console.log(`You listen to ${answer2} while using Node.js.`);
    
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer3) => {
      console.log(`Your favorite meal is ${answer3}.`);
      
      rl.question("What's your favourite thing to eat for that meal? ", (answer4) => {
        console.log(`You enjoy eating ${answer4} for ${answer3}.`);
        
        rl.question("Which sport is your absolute favourite? ", (answer5) => {
          console.log(`Your favorite sport is ${answer5}.`);
          
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer6) => {
            console.log(`Your superpower is: ${answer6}`);
            
            rl.close();
          });
        });
      });
    });
  });
});

