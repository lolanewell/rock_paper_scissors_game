
/*var answer = prompt("rock, paper or scissors?");*/

var user = 0; 
var computer = 0;

for (i = 0; i < 3; i++) {
    var answer = null;
    while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors') {
        answer = prompt("rock, paper or scissors?");
    } 
    if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    if (answer === computerChoice) {
        alert('You tied this round');
    } else if ((answer === 'rock' && computerChoice === 'scissors') || 
    (answer === 'paper' && computerChoice === 'rock') || 
    (answer === 'paper' && computerChoice === 'rock')) {
        user++;
        alert('Yay! You won this round!');
    } else {
        alert('you lost this round :(');
        computer++;
    }
}
}

if (user > computer) {
    alert('You have won with ' + user + ' - ' + computer);
} else if (user === computer) {
    alert('You have tied with ' + user + ' - ' + computer);
} else {
    alert('You have lost ' + user + ' - ' + computer );
}
