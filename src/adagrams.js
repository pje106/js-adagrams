import { removeItem } from "vorpal/dist/local-storage";

const LETTER_POOL = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}


const LETTER_SCORE = {
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
}

// *********** wave1 ************
export const drawLetters = () => {
  let letters = [];

  for (var key in LETTER_POOL) {
    for (let j = 0; j < LETTER_POOL[key]; ++j);
      letters.push(key);
  }
  let drawn = []
  for (i=0; i<10; i++){
    let drawLetterIndex = Math.floor(Math.random() * letters.length);
    
    drawn.push(letters[drawLetterIndex]);
    letters.splice(drawLetterIndex, 1);
  }
  return drawn
};
// *********** wave2 ************
export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  let lettersInHandCopy = [...lettersInHand];

  for (let i in input) {
    if (lettersInHandCopy.includes(input[i])) {
      lettersInHandCopy.splice(i,1);
    } else {
      return false;
    }
    return true;
  }
  }

// *********** wave3 ************
export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();

  if (word.length >=7 && word.length <= 10){
    score += 8;
  }

  for (let letter of word){
    if(LETTER_SCORE.hasOwnProperty(letter)){
    score += LETTER_SCORE[letter]
    }else{
      score +=0
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
