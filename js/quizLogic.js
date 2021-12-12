/*clicking on an image to zoom in*/
 document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
   	  const src = e.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })

/*Question 1 logic*/
 $("#submit").click(function(event) {
	event.preventDefault();
	var $answer = $("#quiz-answer1"); 
	var answer = $answer.val();
	console.log(answer);
	if(answer === "3"){
			$("#result1").text("Question 1: You are Correct.");
			document.getElementById("resultTitle").style.visibility = "visible";
	} 
		else if(answer === "0"){
			alert("Please pick a valid answer for Question 1");
		}
		else{
			$("#result1").text("Question 1: You are Incorrect, Please try again.");
			document.getElementById("resultTitle").style.visibility = "visible";
	}
});

/*Question 2 logic*/
$("#submit").click(function(event) {
	event.preventDefault();
	var $answer = $("#quiz-answer2"); 
	var answer = $answer.val();
	console.log(answer);
	if(answer === "1"){
			$("#result2").text("Question 2: You are Correct");
			document.getElementById("resultTitle").style.visibility = "visible";
	} 
		else if(answer === "0"){
			alert("Please pick a valid answer for Question 2");
		}
		else{
			$("#result2").text("Question 2: You are Incorrect, Please try again.");
			document.getElementById("resultTitle").style.visibility = "visible";
	}
});

/*Question 3 logic*/
$("#submit").click(function(event) {
	event.preventDefault();
	var $answer = $("#quiz-answer3"); 
	var answer = $answer.val();
	console.log(answer);
	if(answer === "3"){
			$("#result3").text("Question 3: You are Correct.");
			document.getElementById("resultTitle").style.visibility = "visible";
	} 
		else if(answer === "0"){
			alert("Please pick a valid answer for Question 3");
		}
		else{
			$("#result3").text("Question 3: You are Incorrect, Please try again.");
			document.getElementById("resultTitle").style.visibility = "visible";
		}
});

/*Question 4 logic*/
$("#submit").click(function(event) {
	event.preventDefault();
	var $answer = $("#quiz-answer4"); 
	var answer = $answer.val();
	console.log(answer);
	if(answer === "1"){
			$("#result4").text("Question 4: You are Correct.");
			document.getElementById("resultTitle").style.visibility = "visible";
	} 
		else if(answer === "0"){
			alert("Please pick a valid answer for Question 4");
		}
		else{
			$("#result4").text("Question 4: You are Incorrect, Please try again.");
			document.getElementById("resultTitle").style.visibility = "visible";
		}
});

/*Question 5 logic*/
$("#submit").click(function(event) {
	event.preventDefault();
	var $answer = $("#quiz-answer5"); 
	var answer = $answer.val();
	console.log(answer);
	if(answer === "2"){
			$("#result5").text("Question 5: You are Correct.");
			document.getElementById("resultTitle").style.visibility = "visible";
	} 
		else if(answer === "0"){
			alert("Please pick a valid answer for Question 5");
		}
		else{
			$("#result5").text("Question 5: You are Incorrect, Please try again.");
			document.getElementById("resultTitle").style.visibility = "visible";
		}
});

/*Question 6 logic*/
$("#submit").click(function(event) {
	event.preventDefault();
	var $answer = $("#quiz-answer6"); 
	var answer = $answer.val();
	console.log(answer);
	if(answer === "1"){
			$("#result6").text("Question 6: You are Correct.");
			document.getElementById("resultTitle").style.visibility = "visible";
	} 
		else if(answer === "0"){
			alert("Please pick a valid answer for Question 6");
		}
		else{
			$("#result6").text("Question 6: You are Incorrect, Please try again.");
			document.getElementById("resultTitle").style.visibility = "visible";
		}
});

/*Form Pop Up*/ 
$("#submit").click(function(){
	$("#formContainer").toggle();
});

/*Closing Form Pop Up*/
$("#close").click(function(){
	$("#formContainer").hide();
});

	