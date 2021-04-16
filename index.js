// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

{
    let counter = 0;
    for (let i = 1; i < 20; i++) {
        counter += i;
        console.log(counter);
    };
}

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

{
    for (let i = 0; i < 5; i++) {
        switch (i) {
            case 0 :
                console.log("There is one bottle of beer on the wall.");
                break;
            case 1 :
                console.log("There are two bottles of beer on the wall.");
                break;
            case 2 :
                console.log("There are three bottles of beer on the wall.");
                break;
            case 3 :
                console.log("There are four bottles of beer on the wall.");
                break;
            case 4 :
                console.log("There are five bottles of beer on the wall.");
                break;
        };
    };
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

{
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is uneven");
        }
    };
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

{   
    for (let i = 1; i <= 10; i++) {
        const product = i * 9;
        console.log(i + " * 9 = " + product);
    }

    // Bonus: 
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j < 11; j++) {
            const number = i * j;
            console.log(`${i} * ${j} = ${number}`);
        };
    };
}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        };
    };
}

// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.

{
    let sum = 0;
    for (let i = 0; i < 1000; i++) { 
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
            console.log(sum);
        };
    };
}

// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
{
    let counter = 0;
    for (let i = 0; i <= 10; i++) {
        counter = i * 100;
        console.log(counter);
    }
}
// >
// >0 2 4 6 8 10
{
    let counter = 0;
    for (let i = 0; i <= 5; i++) {
        counter = i * 2;
        console.log(counter);
    };
}
// >
// >3 6 9 12 15
{
    let counter = 0;
    for (let i = 1; i <= 5; i++) {
        counter = i * 3;
        console.log(counter);
    };
}
// >
// >9 8 7 6 5 4 3 2 1 0
{
    for (let i = 9; i >= 0; i--) {
        console.log(i);
    };
}
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
{
    for (let i = 1; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(i);
        }
    };
}

// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
{
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            console.log(j);
        }
    }
}

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

{
    const palindrome = "Tattarrattat";
    const check = palindrome.toLowerCase().split("").reverse().join("");
    const isPalindrome = check.charAt(0).toUpperCase() + check.slice(1);
    (palindrome === isPalindrome) ? console.log("Yes, that word is a palindrome.") : console.log("Nope, that word is not a palindrome.");

    //OR with a for loop:

    const word = "madam";
    const arr = word.split("");
    let revArr = [];
    for (let i = arr.length -1 ; i >= 0; i--) {
        revArr.push(arr[i]);
    };
    // console.log(arr);
    // console.log(revArr);
    (arr === revArr) ? console.log("This word is a palindrome, yes!") : console.log("I don't know what that is, but it's not a palindrome.");
    // For some reason it gives me a false on the tenary, even if both arrays are the same. 
    // Any ideas??

}


