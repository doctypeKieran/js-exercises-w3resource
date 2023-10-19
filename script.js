/* ----- JAVASCRIPT EXERCISES ----- */

/* --- JavaScript Basic --- */

// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

/* const showDate = () => {
    // Array of weekdays for the .getDay() method to access by index
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Variable for current date
    const date = new Date();

    // Index variable to access the correct day of the week from the "days" array
    const currentDayIndex = date.getDay();
    const currentDay = days[currentDayIndex];

    // Variable for current time
    const time = date.toLocaleTimeString();

    // Print values to console in format
    console.log(`Today is: ${currentDay}`);
    console.log(`Current time is: ${time}`);
}



showDate(); */

// 2. Write a JavaScript program to print the current window contents.  

/* const printWindowContents = () => {
    const windowContents = window;
    console.log(windowContents);
}
printWindowContents(); */



// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

/* const getCurrentDate = () => {
    const date = new Date();
    const years = date.toLocaleDateString();
    console.log(years);
}

getCurrentDate(); */



// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  



// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  



// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  



// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  



// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

/* const guessNumber = (num) => {
    // Ensure the number is an integer
    if (!Number.isInteger(num)) {
        console.log("MAKE IT AN INTEGER, MY FRIEND!");
        return;
    }

    // Variable for random number
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    
    // Check if user guess matches random number
    if (randomNumber === num) {
        alert("Correct!");
    } else {
        alert("Nah.");
    }

} */



// 9. Write a JavaScript program to calculate the days left before Christmas.



// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

const firstNumber = document.getElementById('number-1').value;
const secondNumber = document.getElementById('number-2').value;

const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

const answerSpan = document.getElementById('answer');

multiplyBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const result = parseInt(firstNumber) * parseInt(secondNumber);
    console.log(typeof firstNumber);
    console.log(typeof secondNumber);
    console.log(typeof result);

    answerSpan.innerHTML = result;

})



// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.