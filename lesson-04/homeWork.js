'user strict'

function alert(array){
	console.log(array);
	console.log('-------------->');
}

let array = [14, 62,-13, 2, 8, 25, 17, -21, 7, 12, 9, 34, 0, 15, 4, -19, 28, 83, -91, 46]

function customSort(a,b){
	return a-b;
}

console.log('Array sorted in an usual way:');
array.sort(customSort);
alert(array);

console.log('Array sorted in reverse way:');
array.reverse(customSort);
alert(array);

function filterPositive(a){
	return a>=0;
}

function filterNegative(a){
	return a<0;
}

console.log('Array filtered positive number:');

let arrayFilteredPositive = array.filter(filterPositive);
alert(arrayFilteredPositive);

console.log('Array filtered negative number:');

let arrayFilteredNegative = array.filter(filterNegative);
alert(arrayFilteredNegative);


console.log('Create array of student object:');
let groupOfStudent = [];

let student_1 = {yearOfStuding: 1, facultyName: 'math'};
let student_2 = {yearOfStuding: 3, facultyName: 'marketing'};
let student_3 = {yearOfStuding: 5, facultyName: 'electronics'};
let student_4 = {yearOfStuding: 4, facultyName: 'Informatics'};
let student_5 = {yearOfStuding: 2, facultyName: 'physics'};
let student_6 = {yearOfStuding: 1, facultyName: 'linguistics'};
let student_7 = {yearOfStuding: 4, facultyName: 'law'};
let student_8 = {yearOfStuding: 1, facultyName: 'sociology'};
let student_9 = {yearOfStuding: 2, facultyName: 'chemistry'};
let student_10 = {yearOfStuding: 5, facultyName: 'management'};

groupOfStudent.push(student_1,student_2,student_3,student_4,student_5,
		student_6,student_7,student_8,student_9,student_10);

alert(groupOfStudent);

function getFacultyName(object){
	return object.facultyName;
}

console.log('Get array the names of faceltys:');
let arrayOfFacultyName = groupOfStudent.map(getFacultyName);

alert(arrayOfFacultyName);

function getSumOfStudingYears(sumObject, currentOject){
	return sumObject + currentOject.yearOfStuding;
}

console.log('Get sum of studing years:');
let getSumYears = groupOfStudent.reduce(getSumOfStudingYears,0);

alert(getSumYears);


















