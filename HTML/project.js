function checkName(){
	var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
		document.getElementById("message1").innerHTML="Please provide input";
    }
	else
	{
		document.getElementById("message1").innerHTML="Accepted";
	}
}

function checkAge(){
  var y = document.forms["myForm"]["age"].value;
  if ( y>150){
	document.getElementById("message2").innerHTML="Wrong Input";
  }
  else{
	document.getElementById("message2").innerHTML="Accepted";
  }
}



function validateForm()
{
  //Name Validation
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  //Age validation
  var y = document.forms["myForm"]["age"].value;
  if ( y>150){
	alert("Age must be in the range 0-150");
	return false;	
  }
}
