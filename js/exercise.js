'use strict';


/*
	--------------------------------------------------------------
	Exercise-5:(2)
	Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count. You may use  reduce to solve the problem

	Examples:
	    vowelCount('samim') // {a:1,i:1};
	    vowelCount('Tim') // {i:1};
	    vowelCount('Matt') // {a:1})
	    vowelCount('hmmm') // {};
	    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
	--------------------------------------------------------------
*/

// Question -5 answer
const f5 = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter(
      (el) => el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
    )
    .reduce((obj, l) => {
      obj[l] ??= 0;
      obj[l]++;
      return obj;
    }, {});


// const result = f5('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
// console.log(result);

// for Practice vowel count
function vowelCount(str)
{
	let result = str
	.toLowerCase()
	.split("")
	.filter((elm) => elm === 'a' || elm === 'e' || elm === 'i' || elm === 'o' || elm === 'u')
	.reduce((obj,l) => 
	{
		obj[l] ??= 0;
		obj[l]++;
		return (obj)
	},{})
}
const result = vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

// -------------------------------------------------------
//  I need to understand reduce method again
// -------------------------------------------------------

const arrNumber = [1,2,3,4,5,6,7,8,9,10];


// syntax :
// arrNumber.reduce((previousValue,currentValue,currentIndex,array) => 
// {
		
// },'initialize')


// sum
let result1 = arrNumber.reduce((peviousValue,currentValue) => 
{
	return peviousValue + currentValue;
},10)
// console.log(result1)


// another Example: 
const result2 = arrNumber.reduce((previousValue,currentValue) => 
{
	const getResult = previousValue + currentValue;
	return (getResult) 
},[]);
console.log(result2)

// another Example: 
const result3 = arrNumber.reduce((previousValue,currentValue,index,array) => 
{
	return previousValue + currentValue;
},20);
console.log(result3)









