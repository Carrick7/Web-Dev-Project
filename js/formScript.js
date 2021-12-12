//Declaring Ids from HTML for form valdiation
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//EventListener used to validate all form inputs when submit is clicked and naming all functions
form.addEventListener('click', e => { e.preventDefault();

	verifyInputs();
});

//email validation regex
var emailChars = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//first name and surname regex: letters only
var letters = /^[A-Za-z]+$/;

//password regex: 8 to 14 chars long, must contain 1 number & 1 special char
var passwordChars = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/;

function verifyInputs(){
	//using a reguex to validate form inputs
		if(firstName.value.match(letters)){
			setSuccessFor(firstName);
		}
			else{
				setErrorFor(firstName, 'Please leave no blanks and only use letters');
			}

		//surname validation
		if(surname.value.match(letters)){
			setSuccessFor(surname);	
		}
			else{
				setErrorFor(surname, 'Please leave no blanks and only use letters');
			}

		//email validation
		if(email.value.match(emailChars)){
			setSuccessFor(email);
		}
			else{
				setErrorFor(email, 'Email is Invalid');
			}

		//declaring input values for password validation and trimming whitespace
		const passwordValue = password.value.trim();
		const confirmPasswordValue = confirmPassword.value.trim();

		//password validation
		if(password.value.match(passwordChars)){
			setSuccessFor(password);
		}
			else{
					setErrorFor(password, 'Password must be 8-14 characters long with at least 1 number and 1 special character');
			}
		
		//confirm password validation
		 if(passwordValue !== confirmPasswordValue) {
			setErrorFor(confirmPassword, 'Passwords do not match');
		} 
			else if(confirmPasswordValue === ''){
				setErrorFor(confirmPassword, 'Input is blank');
			}
			else if(passwordValue === confirmPasswordValue){
				setSuccessFor(confirmPassword);
			}

		//All inputs are accepted
		if(firstName.value.match(letters) && surname.value.match(letters) && email.value.match(emailChars) && password.value.match(passwordChars) && passwordValue === confirmPasswordValue){
				alert("All your inputs have been accepted. Thank You for signing up!");
				document.getElementById("formContainer").style.display = "none";
		}
	
		//if the success condition is met the div class form-input is updated to form-input success
		function setSuccessFor(input) {
			const formInput = input.parentElement;
			
			//updating form-input class to form-input success when setSuccessFor function is executed
			formInput.className = 'form-input success';
		}
		
		//if the error condition is met the div class form-input is updated to form-input error and displays error message
		function setErrorFor(input, message) {
			const formInput = input.parentElement;
			const small = formInput.querySelector('small');

			//updating the form-input class to form-input error setErrorFor function is executed
			formInput.className = 'form-input error';
		
			//adding error message
			small.innerText = message;
		}
}