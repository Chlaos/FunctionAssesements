// Define the function firstLetterName
function firstLetterName(name) {
    let firstLetter = name[0];
    alert("The name " + name + " starts with the letter " + firstLetter);
}

// Define the function divisibleByTwo
function divisibleByTwo(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Define the function largestNum
function largestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Call the functions
firstLetterName("John");
console.log(divisibleByTwo(10)); // Outputs: true
console.log(largestNum([1, 2, 3, 4, 5])); // Outputs: 5
