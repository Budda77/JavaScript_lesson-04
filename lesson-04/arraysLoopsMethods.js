'user strict'

function alert(array){
	console.log(array);
	console.log('------------------------>');
}

let arrayOfPerson =[];
let person_1 = {name: 'Petro', age: 20};
let person_2 = {name: 'Andrew', age: 30};
let person_3 = {name: 'Vitalii', age: 40};

arrayOfPerson.push(person_1, person_2, person_3);
alert(arrayOfPerson);

// 1. forEach

//arrayOfPerson.forEach(function(item, i, array){
//	console.log(i + ' :: ' + item.name + " --> arrayName:" + array);
//});

function customFunctionForEach(item, i, array){
	console.log(i + ' :: ' + item.name + " --> arrayName:" + array);
};

arrayOfPerson.forEach(customFunctionForEach);
alert();

// 2. filter() 

function filterByAge(obj){
	return obj.age > 28;
}

let filteredArray = arrayOfPerson.filter(filterByAge);
alert(filteredArray);

// 3. map()

function getName(obj){
	return obj.name;
}

let names = arrayOfPerson.map(getName);
alert(names);

// 4. every / some

alert('every() ---> ' + arrayOfPerson.every(filterByAge));
alert('some()  ---> ' + arrayOfPerson.some(filterByAge));

// 5. reduse

function sumPersonAges(sumOfAges, currentObj){
	return sumOfAges + currentObj.age;
}

let ageSum = arrayOfPerson.reduce(sumPersonAges, 0);
alert(ageSum);














