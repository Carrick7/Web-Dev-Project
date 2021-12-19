function message(){
	event.preventDefault();
	document.getElementById("form").style.display = "none";
	var userName=document.getElementById("formName").value;
	var userEmail=document.getElementById("formEmail").value;
	
	
form.addEventListener('click', e => { e.preventDefault();

	verifyInputs();
});
	
var emailChars = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
function verifyInputs(){

if(email.value.match(emailChars)){
			setSuccessFor(email);
		}
			
}
		
	alert(userName+", thank you for your Subject Access Request. We will send a copy of all relevant personal data to " +userEmail+ " within 30 days.");
}



function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } 
  else {
    text.style.display = "none";
  }
  
}



 function generateCode() {	

	let x = Math.floor((Math.random() * 100000000) + 1);	
	alert("Your code is "+x);

}

function learnMoreAds() {
	var popup = document.getElementById("adsInfo");
	popup.classList.toggle("show");
		
}	

function learnMoreServices() {
	var popup = document.getElementById("servicesInfo");
	popup.classList.toggle("show");
		
}

function learnMoreImprovements() {
	var popup = document.getElementById("improvementsInfo");
	popup.classList.toggle("show");
		
}	
