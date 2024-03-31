//we create a function called numbers and assign two parameters a, b.
// function number(a, b){
//     //we for to create the output.
//     for (let i = a; i <= b; i++){
//         console.log(i);
//     }
// }
// number(4, 7)

function number(a, b){
    
    let result = []  //empty array to store the result

    let least = Math.min(a, b); //determine the least number

    let largest = Math.max(a, b);//determine the largest number
      
    //inclusively iterate from the least number to the largest number
    
    for (let j = least; j <= largest; j++){
        result.push(j);        //add the result to the array
    }
    return result;           //return the array
}
console.log(number(-4, 7));