const userLoggedIn = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

userLoggedIn(3000)
    .then(() => console.log('us getting you logged in!'));

let loadSite = () => {
    console.log('loading the site...');
}

loadSite();

var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: "What's your trainer name?",
        name: 'trainerName'
    },
    {
        type: 'password',
        message: 'password',
        name: 'trainerPassword'
    },
    {
        type: 'list',
        message: 'Choose your first pokemon:',
        choices: ['Bulbasaur', 'Squirtle', 'Charmeleon', 'Pikachu'],
        name: 'trainerChoice'
    },
    {
        type: 'confirm',
        message: 'Are your sure?',
        default: true,
        name: 'trainerConfirm'
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
        if (answers.trainerConfirm == true){
           console.log(` Hello ${answers.trainerName}, your ${answers.trainerChoice} is ready for battle!`);
        } else {
            console.log(`that's ok, ${answers.trainerName}, come back when you're more sure.`);
        }
  })
  .catch(error => {
    // if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error.isTtyError);
    // } else {
    //   // Something else when wrong
    // }
  });

  let login = () =>{
      console.log('logging in');
  };
  
  login();
