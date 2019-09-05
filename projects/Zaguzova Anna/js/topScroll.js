let button = document.querySelector('#scroll');

button.addEventListener('click', scroll)
button.addEventListener('touchstart', scroll)

console.log(button)

function scroll() {
	let t; 
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop); 

	if(top > 0) { 
		window.scrollTo(0,Math.floor(top/1.5)); 
		t = setTimeout("scroll()",30); 
	} else { 
		clearTimeout(t); 
	} 
	
	return false; 
}