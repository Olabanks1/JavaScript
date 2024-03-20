const button = document.getElementById("check-btn");
const myInput = document.getElementById("text-input");
const result = document.getElementById("result")
const userInput = myInput.value
const regex = /[^A-Za-z0-9]/gi;
function invalidInput(input){
  if(input === ''){
    alert("Please input a value")
  }
const cleanInput = input.replace(regex,'').toUpperCase()
console.log(cleanInput)
const palindrome = [...cleanInput].reverse().join('')
console.log(palindrome);
const checkPalindrome =` ${cleanInput === palindrome ?"is":"is not"} a palindrome`;
console.log(checkPalindrome)
// The palimdrome code
if (input === palindrome){
  console.log(`${input} ${checkPalindrome}`)
  result.innerHTML = `
    <p> ${input} ${checkPalindrome} </p>
  `;
  return input === "" ? result.innerHTML = '<p> </p>' :  result.innerHTML = `
  <p> ${input} ${checkPalindrome} </p>
`;
}
if(input !== palindrome){
  console.log(`${input} ${checkPalindrome}`)
  result.innerHTML = `
    <p> ${input} ${checkPalindrome} </p>
  `;
}

  return
};



button.addEventListener("click",() =>{
  invalidInput(myInput.value);
})
