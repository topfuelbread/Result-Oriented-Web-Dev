//120
/////pop-up window:
//alert("alert() creates a pop-up window.");


//121 Variables
/////variable declaration and initialization:
let x = 5;					//private
var y = 10;					//public

//console display:
console.log(x);


//123 Strings and Basic Operations
let name = "Walt Disney";
let text = `"If you can dream it, you can do it!" by ${name}`;
/////Strings can be enclosed within "" or ''
/////However, to include a variable, use ``
/////to have quotations within the string, use backslash (e.g. \')
///concatenation: String1 + String2
///length: text.length
///index: text[i]


//124 Null and Undefined
///undefined: like an empty cart
let cart;					//undefined
///null: emptying out a filled cart
cart = 5;
cart = null;			//null


//125 Boolean and Confirm Function
let falseBool = 3 > 5;
let trueBool = 'a' < 'c';
console.log(3 < 5);
///confirm: creates a pop up window that can be answered by yes or no
//let isAdult = confirm("Are you 18 years of age or older?");


//126 Naming Rules, Coding Conventions
//names cannot start with a number or most symbols
//names can start with an underscore


//127-129 Prompt
///Prompt: creates a pop up window with an input field
///// prompt(message, defaultValue) returns String
///// use +prompt to return int
/*
let pName = prompt('Enter your name', '');
console.log(pName);

let pNameFirst = prompt('First name');
let pNameLast = prompt('Last name');
let pAge = prompt('Age');
alert(`Hello ${pNameFirst} ${pNameLast}, you are ${pAge} years old.`);
alert('Hello '+pNameFirst+" "+pNameLast+", you are "+pAge+" years old.");
*/

//131 Comparison Operators
/// === : identity / strict equality... comparison without type conversion
///// 3 === "3" is false as a number is being compared to a text 3
///// however, 3 == "3" is true
/// !== : non-identity / strict inequality
///// 3 !== "3" is true


// 132 Logical Operators
/// && AND, || OR, ! NOT
/// !! to find out what Boolean value the variable will have
/////!! will return false 
///// if the variable contains {false, 0, "", null, undefined, NaN}
let a132 = "10";
let b132 = !!a132;
console.log(b132);			//true as the variable contains a value

let a133 = 5;
let b133 = "6";
console.log(!(a133>=5 || b133 ===6) || !(a133 === "5" && b133 == 6));	//false


// 134-136 Conditional Statements
/// if (condition) {}, else if, else


// 137 Shorthand Operators
/// +=, -=, *=, /=, %=, ++, --


// 138-142 For Loop
/*
let num140 = +prompt('Enter a number');		//+ is added to convert String to int
for (let i = 1; i <= 10; i++){
	console.log(num140 + ' x ' + i + ' = ' + (num140*i));
	console.log(`${num140} x ${i} = ${num140*i}`);
}*/


//143-147 While Loop
///while(condition){}



//148 Prompt and typeof
/////variable type: number, string, boolean, null, undefined
let x148 = "Hello!";
let y148;
console.log(typeof x148);					//string
console.log(typeof 12);						//number
console.log(typeof 'Have a nice day!');		//string
console.log(typeof y148);					//undefined
console.log(typeof true);					//boolean
//y148 = prompt("Enter a value");
console.log(typeof y148);					//string
//y148 = +prompt("Enter a value");
console.log(typeof y148);					//number
console.log(typeof (x148 + 3));				//string


//149-157 Functions
///function name(arg1, arg2){return var;};
function toCamelCase (sentence) {
	let words = sentence.split(' ');		//string.split(delim) --> array
	for (let i = 0; i < words.length; i++){
		if (i===0)
			words[i] = words[i][0].toLowerCase()+words[i].substring(1,words[i].length);
		else 
			words[i] = words[i][0].toUpperCase()+words[i].substring(1,words[i].length);
	}
	let result = words.join(' ');			//array.join() --> string
	console.log(result);
}
toCamelCase('To be or not to be');			//will print to Be Or Not To Be


//158 Callback Functions, setInterval() and setTimeout()
///callback function: a function that gets called by other function
function helloFunc(){
	console.log("Hello");
}
function byeFunc(){
	console.log("Bye");
}
function greeting(func){
	func();
}
//greeting(helloFunc);	

///setInterval(function, interval)
/////e.g. setInterval(helloFunc, 2000); helloFunc() will be called every 2s
/*
setInterval(helloFunc, 2000);
setInterval(function(){
	console.log("calling function without a name");
}, 2000);*/

///setTimeout(function, interval); executes only once
/////e.g. setTimeout(helloFunc, 2000); helloFunc will be executed after 2s
//setTimeout(helloFunc, 2000);

///clearInterval(name);
/////halts & clears the interval
/*
let counter158 = 0;
let interval158 = setInterval(function() {
	counter158++;
	if (counter158===2)
		clearInterval(interval158);
	console.log(counter158);
}, 0)
*/

//159 Scope: local vs global


//160-168 Array
/////not type specific
let month160 = ["Jan","Feb","Mar","Apr","May","Jun",
			"Jul","Aug","Sep","Oct","Nov","Dec"];
month160.length;				//length
console.log(month160.indexOf("Oct"))		//location of value
month160.pop();					//delete the last
month160.shift();				//delete the first
month160.push("Dec");			//add to last
month160.unshift("Jan");		//add to first
console.log(month160.splice(2,1));			//.splice(index, count) DELETE Mar
console.log(month160.slice(1,4));			//.slice(from,to); COPY from [1,4)
/////will display Feb,Apr,May as Mar is spliced
console.log(month160.slice(1));				//.slice(from); copy from 1 to end
let month160_2 = month160;			
/////changing the first array will change the second array
/////to avoid this, use splice

//forEach(function(eachElement, indexOfElement, array){...});
month160.forEach(function(elem, indexElem, arr){
	console.log(elem);
});


//169-171 Objects (nested, methods)
/// let obj = {property:value}
let personVar = ["Daniel", 28, "male"];
let personObj = {
	name: "Daniel",
	age: 28,
	sex: "male",
	greeting: function() {
		console.log(`Hello my name is ${this.name}`)
	}
}

/// use obj.property or obj.["property"] to access it
console.log(personObj.age);
console.log(personObj["age"]);			//like array
/////both print the same thing, however,
/////use ["property"] if property begins with a number 
/////or consists of several words
/////or property is a value of a variable
personObj.age = 30;
personObj.greeting();				//"Hello my name is Daniel"

///Nested objects using array
let pets = [
	{
		name: "Blueberry",
		age: 3.5,
		parents: [
			{
				name: "June",
				age: 23
			},
			{
				name: "Ross",
				age: 23
			}
		]
	},
	{
		name: "George",
		age: 1.5,
		parents: ["June", "Ross"]
	}
]
console.log(pets[0].name)				//Blueberry
console.log(pets[0].parents[0])			//{name: "June", age: 23}


//172 DOM: document object model
/////each tag of a webpage turns into an object called node
/*
let tag = {
	tagName: "h1",
	id: "page-heading",
	className: "red",
	textContent: "Hello"
}*/	//<h1 id="page-heading" class="red">Hello</h1>
///element nodes (tags) vs text nodes (text content)
/////<body> and <h1> are element nodes
///// space and "Hello" and space are text nodes
console.dir(document);		//highest level for web pages; info
//////document has body and head
//////meta or title will be in the childnode of document
//////document-childnode: text(break row), meta, text, title, text
//console.dir(pets);
///browser sees web page as object model


//173 JS Selectors: for non-global objects
///.getElementsBy(Name/TagName/ClassName)
///.getElementById
///.querySelector(/All)
let name173 = document.getElementsByName("wish");
console.dir(name173);			//--> NodeList(1)
let tagName173 = document.getElementsByTagName("p");
console.dir(tagName173);		//--> HTMLCollection(2)
let className173 = document.getElementsByClassName("red-text");
console.dir(className173);		//--> HTMLCollection(2)
let id173 = document.getElementById("main");
console.dir(id173);				//--> p#main.red-text

let query173 = document.querySelector(".red-text");
///find the first class that matches the condition
console.dir(query173);			//--> h1#page-heading.red-text
let queryy173 = document.querySelector('p:nth-of-type(2)');
/// find the 2nd p tag
console.dir(queryy173);

let queryAll173 = document.querySelectorAll(".red-text");
console.dir(queryAll173);		//-->NodeList(2)
///find all tags that match the condition


//174 Creating & Deleting Elements
///document.createElement('tag name');
///list.appendChild(element);				//end to end
///list.insertBefore(element to add, element location);
///element.remove()
let task174 = document.createElement('li');
task174.textContent = 'Task3';
let list174 = document.getElementById('list');
list.appendChild(task174);
/////task3 was added to the end of the list

let taskk174 = document.createElement('li');
taskk174.textContent = 'Task0';
list.insertBefore(taskk174, list174.children[0]);
/////task0 was added before task1

list174.children[1].remove();
/////removes task1


//175 Manipulating Style (CSS)
///elem.style.property = "value";
///// e.g. elem.style.width = "200px";
let green175 = document.querySelector(".green");
green175.style.color = "green";
green175.style.backgroundColor = 'grey';
/////notice how the syle is written in camel style
console.dir(green175);		//scroll down to style to see all possible styles


//176 Events
let btn176 = document.querySelector('.btn');
btn176.onclick = function(){
	alert("You clicked me!");
	console.log("onclick 1");
}
btn176.onmouseover = function(){			//different from hover; permanent
	btn176.style.backgroundColor = "yellow";
	console.log("onmouseover");
}
btn176.onclick = function(){				//overrides first onclick
	console.log("onclick 2");
}
///only one kind of same event handler can be used for an element
///to add more than 1 event handlers, use event listener!

btn176.addEventListener('click', function(){
	console.log("onclick 3");
})


//177 Keyboard Events
let input1 = document.querySelector(".input1");
input1.addEventListener('keypress', function(){
	console.log(input1.value);			
	//prints every time a key is hit within the input box
})	//keypress: when the character is entered
let input2 = document.querySelector(".input2");
input2.addEventListener('keydown', function(event){
	if (event.which === 13){		//prints only when CR(enter) is pressed
		console.log(this.value);
	}		
})
let input3 = document.querySelector(".input3");
input3.addEventListener('keyup', function(){
	console.log(input3.value);		
})

let input177 = document.querySelectorAll("input");
///cannot use .addEventLisener as input177 is a node list
for (let i = 0; i < input177.length; i++){
	input177[i].addEventListener('click', function(){
		console.log(this.value);		//=(input177[i].value)
		console.dir(event);				//specifies which event occured
	})
}

let a177 = document.querySelector("a");
a177.addEventListener("click", function(event){
	event.preventDefault();			//default redirection will not work
	console.log("redirection to Google has been prevented")
})



//178 How to generate a random number
/// Math.random() --> [0,1) --> 0~0.999
console.log(Math.random());
/// Math.random() * max --> [0,max)
console.log(Math.random() * 3);		//0~2.99
/// Math.random() * (max-min) + min --> [min, max)
console.log(Math.random() * (5-2) + 2);		//[2,5)

/// Math.floor(Math.random()*(max+1)) to generate integer
console.log(Math.floor(Math.random()*(100+1)));