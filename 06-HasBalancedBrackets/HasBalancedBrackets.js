function HasBalancedBrackets (string) {
  // Your code here:
 let stack=[]

 const validateBrakets={
   "{":"}",
   "[":"]",
   "(":")",
 }

 for(const brakets of string){
   if(validateBrakets[brakets]) stack.push(brakets);
   else if(validateBrakets[stack.pop()] !==brakets) return false
 }
 return !stack.length
}
console.log(HasBalancedBrackets("{[]()}")); //(true)
console.log(HasBalancedBrackets("{[(])}")); //(false)
console.log(HasBalancedBrackets("{[(")); //(false)
console.log(HasBalancedBrackets("{[([{()[]{}}])]}")); //(true)
console.log(HasBalancedBrackets("{[]}}")); //(false)

module.exports = HasBalancedBrackets
