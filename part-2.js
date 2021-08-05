const userInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  
  
let letters = [["a","w"], ["b", "f"], ["c","g"], ["d","o"], ["e","l"], ["f","y"], ["g","i"], ["h","j"], ["i","b"], ["j","h"], ["k","s"], ["l","e"], ["m","q"], ["n","p"], ["o","c"], ["p","t"], ["q","m"], ["r","r"], ["s","k"], ["t","u"], ["u","x"], ["v","v"], ["w","d"], ["x","a"], ["y","z"], ["z","n"]]
  
// Tried forever to get the user input on the console, but couldn't figure it out.
// let getWord = () => {
//     userInput.question('Enter your guess: ', (input) => {
//         word = input
//         return word
//     });
//     userInput.close()
// }

// let word = getWord()

const cipherWord = (word) => {
    let ciphered = []  
    for (i=0; i < word.length; i++){
        for (j=0; j < letters.length; j++){
            if (word[i] === letters[j][0]){
                ciphered.push(letters[j][1])
                // console.log(ciphered)
            }
        }
    }return ciphered.join("")
};

// getWord()

console.log("Ciphered word ==>> ",cipherWord("word"))
