//189 Selectors & Ready Function
///Selectors:
/////JS has getElementsBy and querySelector
/////jQuery uses $("selector")
$(function(){
	let h1 = $('h1');
	console.log(h1);
	let a = $('h1 a');	//all a tags inside h1
})

///Ready function: executes once the page has fully loaded
/////option 1: $(function(){...});
$(function(){
	//alert("This will be shown after the page is fully loaded")
})
/////option 2: $(document).ready(function(){...});
$(document).ready(function(){

})



//190-194 Events: all actions that is done to/with the page
let mouseEvent = ['click','dblclick','mouseover'];
let keyboardEvent = ['keypress','keyup','keydown'];
let formEvent = ['submit','change','focus'];
let docEvent = ['load','resize','scroll'];

//191 Mouse Events
let cbtn191 = $('.clickBtn');
///option 1: cbtn191.click(function(){})
///option 2: 
cbtn191.on('click', function(){console.log('click')});
let dbtn191 = $('.dbclickBtn');
///option 1: dbtn191.dblclick(function(){})
///option 2: 
dbtn191.on('dblclick', function(){console.log('click')});
let obtn191 = $('.overBtn');
///option 1: obtn191.mouseover(function(){})
///option 2: 
obtn191.on('mouseover', function(){console.log('click')});
///option 1 combined all together will have 3 separate functions
///option 2 can be combined together into one function
///			: btn.on('click dblclick mouseover', function(){})

//192 Keyboard Events
///element.on('event',function)
let inp192 = $('.keyEvent');
// inp.on('keypress keydown keyup', function(){
// 	console.log('The user is tying...')
// })
inp192.on('keypress',function(e){
	if (e.which === 13 && e.shiftKey)
		console.log('The enter + shift key was pressed');
})

//193 Form Events
let text193 = $('.formInput[type=text]');
text193.on('focus', function(){		//when clicked
	$(this).addClass('focused');
})
text193.on('blur', function(){		//when unclicked
	$(this).removeClass('focused');
})
let file193 = $('.formInput[type=file]');
file193.on('change',function(){
	console.log('a file has been chosen');
})
///// let form193 = $('.formInput[type=submit]'); does not work
let form193 = $('form');
form193.on('submit',function(){
	alert('your message has been sent');
})


//194 Window Events
$(document).ready(function(){
	console.log('the elements on the webpage have been loaded')
})
$(window).on('load', function(){
	console.log('the page has been loaded');
})
$(window).on('resize', function(){
	console.log(`width: ${$(window).width()}; height: ${$(window).height()}`);
})
$(window).on('scroll', function(){
	console.log(`offset top: ${$(window).scrollTop()}`);
})


//195 Styling
let block195 = $('.block');
block195.css('background-color', 'yellow');
let blocks195 = $('.block2');
blocks195.css('background-color', block195.css('background-color'));
let style195 = {	//camelcase as they are properties of an object
	width: '400px',
	backgroundColor: 'orange'
}
block195.on('click', function(){
	block195.css(style195);
});


//196 Visual Effects: appear vs disappear
///show() vs hide()
///fadeIn() vs fadeOut()
///slideDown() vs slideUp()
///toggle(), fadeToggle(), slideToggle()
let hideBtn = $('.hideBlock');
let showBtn = $('.showBlock');
let toggle = $('.toggleBtn');
hideBtn.on('click',function(){
	block195.slideDown();
})
showBtn.on('click',function(){
	block195.slideUp();
})

toggle.on('click',function(){
	block195.toggle();
})


//197 Animate: .animate(properties,options)
let aniBtn = $('.animate');
aniBtn.on('click', function(){
	block195.animate({
		height: '200px', width:'200px', opacity:'0.1'
	}, 2000)
})


//198 Attr: object.attr(attribute, value);
let attrBtn = $('.change');
attrBtn.on('click', function(){
	$('.img1').attr('src', 'images/cat2.png');
})
let img1Src = $('.img1').attr('src');
$('.add').on('click', function(){
	$('.blank').attr('src',img1Src);
})


//199 Value: val()
console.log($('.input1').attr('value'));
/////attr('value') does not work with non-text input as it does not have a value
$('.input2').val('55');		//setting up the value with val()	
$('.input2').on('change', function(){
	console.log($('.input2').val());
});
$('.input3').on('change', function(){
	console.log($('.input3').val());
});


//200 Class Manipulation
///addClass(), removeClass(), toggleClass()
let man = $('.manipulate');
man.on('click', function(){
	man.toggleClass('circle');
});


//201 Content Manipulation
	// option 1 JavaScript:
	// let el = document.createElement('li');
	// el.className='red';
	// el.textContent='item';
	// let list = document.querySelector('ul');
	// list.appendChild(el); for last
	// list.insertBefore(el, childNodes[0]); for first
	// option 2 jQuery:
	// let el = $('<li></li>');	//start and end tag to make
	// el.addClass('red');
	// el.text('item 3');
	// let list = $('ul');
	// list.append(el); for last, list.prepend(el) for first
//option 3 jQuery chaining:
$('<li></li>')		//new element
	.addClass('red')
	.text('item 3')
	.appendTo($('ul'));		//add to last
$('<li></li>')		
	.addClass('red')
	.text('item 0')
	.prependTo($('ul'));	//add to first