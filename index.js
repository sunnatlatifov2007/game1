// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// for (let task of arr) {
//     if (task.completed == true) {
//        a.arr.push(task)
//        a.count ++
//     }else {
//         b.arr.push(task)
//         b.count++;
//     }
// }
// console.log(a, b);

// const companies = [
//     { name: "Apple", income: [10000, 12000, 500], spend: 23000 },
//     { name: "Microsoft", income: [10000, 12000, 1500], spend: 17000 },
//     { name: "Google", income: [15000, 20000, 4000], spend: 7000 },
//     { name: "SpaceX", income: [150000, 62000, 2000], spend: 99000 },
//     { name: "GM motors", income: [15000, 20000, 4000], spend: 100 },
// ];




// for (let i = 0; i < companies.length; i++) {
//     let sum = 0;
//     for (let W = 0; W < companies[i].income.length; W++) {
//         sum += companies[i].income[W];
//     }
//     companies[i].total = sum;
// }

// let totalIncome = 0;
// for (let i = 0; i < companies.length; i++) {
//     totalIncome += companies[i].total;
// }

// console.log(companies); 
// console.log( totalIncome);



// const user = prompt("your number (k - 1, n - 2, b - 3:)");
// const computer = Math.ceil(Math.random() * 4);

// const v1 = + user === 1 && computer === 3
// const v2 = +user === 2 && computer === 1
// const v3 = +user === 3 && computer === 1

// if (+user === computer) {
//   alert('Draw!')
// }else if( v1 || v2 || v3){
//     alert('you lose!')
// }else{
//     alert("you won!")
// }




const words = ['суннат'];


let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(selectedWord.length).fill('_');
let attempts = 3; 
let guessedLetters = [];

console.log('Загаданное слово:', guessedWord.join(' '));

let gameOver = false;

while (!gameOver) {
    
    let letter = prompt('Enter a letter:').toLowerCase();

    
    if (!letter || letter.length !== 1) {
        alert("Please, enter only one letter!");
        continue; 
    }

  
    if (guessedLetters.includes(letter)) {
        alert("You have already entered the letter!");
        continue;
    } else {
        guessedLetters.push(letter);
    }

    let correctGuess = false;


    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            guessedWord[i] = letter;
            correctGuess = true;
        }
    }


    if (!correctGuess) {
        attempts--;
        alert(`Wrong! Attemps left: ${attempts}`);
    }
    alert('Current word: ' + guessedWord.join());

    if (guessedWord.join('') === selectedWord) {
        alert('Congratulations! You guessed the word!');
        gameOver = true;
    }

    if (attempts <= 0) {
        alert(`You lose! guessed word was: ${selectedWord}`);
        gameOver = true;
    }
}
