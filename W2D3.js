//1- Write a function isTallEnough that takes a height (number) in inches, 
//and returns true if the input is greater than or equal to 48, and false if it's less than 48 inches.
//Calling your function should result in:

console.log(isTallEnough(true)); //true
console.log(isTallEnough(28)); //false

function isTallEnough(n){
	if(typeof(n)!=='number')return "it's not a number";
	else 
		 {
			if(n>=48)return true;
			else return false
			}
}

//2- Write a function isGoodFreethrowShooter that takes a shooting percentage
// (a number you can assume will be between 0 and 1 -- exclusive of 1).
//and returns based on the following criteria:
// If the number is between 0-0.65, return "Horrible freethrow shooter"
// If the number is between 0.65-0.80 return "Decent freethrow shooter"
// If the number is between 0.80-1.00 return "Great freethrow shooter"
// Each range is inclusive of the lower bound, and exclusive of the upper -- in other words, 
//0.65 is counted as a "Decent freethrow shooter" (not "Horrible freethrow shooter") 
//and 0.80 is considered a "Great freethrow shooter" (not "Decent freethrow shooter"). 
//Additionally, you can get a number as high as 0.99, but never 1 
//(this is what the original problem statement means by "exclusive of 1").

// Calling your function should result in:

function isGoodFreethrowShooter(n){
	if(typeof(n)==='number'){
		if(n>0 && n<1){
	if(n>=0 && n<0.65) return "Horrible freethrow shooter"
	else if(n>=0.65 && n<0.80) return "Decent freethrow shooter"
		else if(n>=0.80 && n<1) return "Great freethrow shooter"
			// we can save time by put else ******return "out of range"****** instead of if(n<0 && <1) but it cost more calculation time 
	} 
else return "out of range"
	}
else return "it is not a number"
}
console.log(isGoodFreethrowShooter(0.90)); //"Great freethrow shooter"
console.log(isGoodFreethrowShooter(0.09)); //"Horrible freethrow shooter"
console.log(isGoodFreethrowShooter(0.75)); //"Decent freethrow shooter"

