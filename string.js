function mixedCase(string){

    let result = ''
    //we use for loop to iterate over each character of the string
    for (let j = 0; j < string.length; j++){
        //use if and if elses condition to check if the character is upper or lower
        if (string[j] === string[j].toUpperCase()){
            //if the character is uppercase then we change to lower case and add to the result
            result += string[j].toLowerCase()
        }else{
            //if the character is lowercase then we change to upper case and add to the result
            result += string[j].toUpperCase()
        }
    }
    return result;
}
const string = 'The Quick Brown Fox';
console.log(mixedCase(string));