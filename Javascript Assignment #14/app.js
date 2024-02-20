// Javascript Assignment(14) #part 1
document.write("<b>Question No 1<b>")
document.write("<br>")
function date() {
let now = new Date()
document.write(now+"<br><br>")
} date();


// Javascript Assignment(14) #part 2
document.write("<b>Question No 2<b>")
document.write("<br>")
function nam(){
    let firstName =prompt("Enter a first name")
    let lastName =prompt("Enter a last Name")
    document.write(firstName +" "+ lastName+"<br><br>")
} nam();

// Javascript Assignment(14) #part 3
document.write("<b>Question No 3<b>")
document.write("<br>")
function number() {
    let number1 = +prompt("Enter a number One")
    let number2 = +prompt("Enter a number Two")
    document.write(number1 + number2+"<br><br>");
} number();

// Javascript Assignment(14) #part 4
document.write("<b>Question No 4<b>")
document.write("<br>")
function table() {
    let num =prompt("Enter a Table  Number ")
    let lenght= prompt("Enter a table lenght")
    for (let i = 1; i <= lenght; i++) {
        let result = num * i
        document.write(num+" "+"x"+" "+i+" "+"="+" "+result+"<br>")
    }  document.write("<br>")
} table();


// Javascript Assignment(14) #part 5
document.write("<b>Question No 5<b>")
document.write("<br>")
function squareNumber(number) {
    return number * number;
  }
  // Example usage:
  let  numberToSquare = 5;
  let squaredNumber = squareNumber(numberToSquare);
  document.write(`The square of ${numberToSquare} is: ${squaredNumber}`);
  document.write("<br><br>")



// Javascript Assignment(14) #part 6
document.write("<b>Question No 6<b>")
document.write("<br>")
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
let numbe = 5;
document.write(`The factorial of ${numbe} is ${factorial(numbe)}`+"<br><br>");








// Javascript Assignment(14) #part 7
document.write("<b>Question No 7<b>")
document.write("<br>")
function num() {
    let startnum =prompt("Enter a start number ")
    let endnum =prompt("Enter a End number")
    for (let i = startnum; i <=endnum; i++) {
        document.write(i+"<br>")
    }
    document.write("<br>")
} num();


// // Javascript Assignment(14) #part 8
// document.write("<b>Question No 8<b>")
// document.write("<br>")





// Javascript Assignment(14) #part 9
document.write("<b>Question No 9<b>")
document.write("<br>")
function  Area() {
    let width =prompt("Enter a Width ")
    let height =prompt("Enter a height")
    let equal =  (height * width)/2;
    document.write("A"+" "+"="+"Width"+" "+"*"+" "+"Height"+"<br>")
    document.write("A"+" "+"="+width+" "+"*"+" "+height+"<br>")
    document.write("Width"+" "+width+" "+"Height"+" "+height+"Area"+" "+equal)
} Area(); document.write("<br><br>")



// Javascript Assignment(14) #part 10
document.write("<b>Question No 10")
document.write("<br>")
function isPalindrome(){
    let User =prompt("Enter any Name")
    const formattedStr = User.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    const reversedStr = formattedStr.split('').reverse().join('');

    // Check if the formatted string is equal to its reverse
    if(formattedStr == reversedStr){
     document.write("Your Enter Name"+" "+User+" "+ "is palindrom")
    }
    else{
        document.write("Your Enter Name"+" "+User+" "+" is not a palindrom name")
    }
} isPalindrome(); document.write("<br><br>")


// Javascript Assignment(14) #part 11
document.write("<b>Question No 11")
document.write("<br>")
function Word() {
    let letter ="the quick brown fox"
    let chartArt1 = letter.charAt(0).toUpperCase()
    document.write(" Example Steing : the quick brown fox <br>")
    document.write("Expected Output : "+chartArt1 + letter.slice(1,4) + letter.charAt(4).toUpperCase() + letter.slice(5,10) + letter.charAt(10).toUpperCase()+letter.slice(11,16)+letter.charAt(16).toUpperCase()+letter.slice(17,19))
} Word(); document.write("<br><br>");


// Javascript Assignment(14) #part 12
document.write("<b>Question No 12")
document.write("<br>")
function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let maxLength = 0;
    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Check if the current word's length is greater than the stored maxLength
      if (words[i].length > maxLength) {
        maxLength = words[i].length; // Update maxLength
        longestWord = words[i]; // Update longestWord
      }
    }
    return longestWord;
  }
  // Test the function with an example string
  const exampleString =prompt("Enter Any string Word");
  const longest = findLongestWord(exampleString); // call a function 
  document.write("Example String:"+" "+exampleString+"<br>"+"Longest word:", longest+"<br><br>"); // Output the longest word
  


//  Javascript Assignment(14) #part 13
document.write("<b>Question No 13")
document.write("<br>")
function countOccurrences(str, letter) {
    // Convert the string to lowercase (or uppercase) for case-insensitive counting
    const lowerCaseStr = str.toLowerCase(); // Change to .toUpperCase() for case-sensitive counting
    // Initialize a counter for the occurrences of the letter
    let count = 0;
    // Iterate through each character in the string
    for (let i = 0; i < lowerCaseStr.length; i++) {
      // Check if the current character matches the specified letter
      if (lowerCaseStr[i] === letter.toLowerCase()) { // Change to .toUpperCase() for case-sensitive counting
        count++; // Increment the count if it matches
      }
    }
  
    return count;
  }
  
  // Test the function with sample arguments
  const sampleString =prompt("Enter a String Word for count");
  const letterToCount =prompt("Enter a letter for count");
  const occurrences = countOccurrences(sampleString, letterToCount);
  document.write("Your Enter String word is:"+sampleString+"<br>"+"Your Count letter is:"+letterToCount+"<br>"+"Number of count letter is:"+occurrences+"<br><br>");
  
