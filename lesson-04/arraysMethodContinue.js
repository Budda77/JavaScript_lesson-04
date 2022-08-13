'user strict'

function alert(array){
	console.log(array);
}

let array = [4, 22, 22, 56, 8, 12, 37];

alert(array);

//1. basic sort
array.sort();
alert(array);

//2. custom sort
function compareNumbers(num1, num2){
	return num1 - num2;
	//return (-1)*(num1 - num2);  //reverse
	//return num2 - num1;  //reverse
}

array.sort(compareNumbers);
alert(array);

//3. reverse
array.reverse();
alert(array);

//4. concat

let array2 =[1000, 2000, 3000, [-999, -888, -777]];
let concatedArray = array.concat(array2);
alert(concatedArray);

//5. indexOf / lastIndexOf
alert(array.indexOf(22));

alert(array.lastIndexOf(22));

//6. keys

let person = {
		name: 'Andreas',
		age: 25
}

let keysOfPerson = Object.keys(person);
alert(keysOfPerson);












