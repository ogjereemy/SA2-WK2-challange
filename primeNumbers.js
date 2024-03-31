//You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(numbers){
//     //we use the for loop to iterate over each number in the array
//     // for (let i = 2; i < numbers; i++){
//     //     if (numbers % i === 0){
//     //         return numbers;
//     //     }
//     // }
//     // return numbers;
    
// }
// console.log(isPrime(numbers));
function isPrime(number){
    if (number <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
function filterPrime(arr){
    return arr.filter(number => isPrime(number));
}
console.log(filterPrime(numbers));