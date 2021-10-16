function validateFirstName(){
  var fName = document.getElementById("firstName").value;
  var input = /[a-zA-Z]{1,10}/;

  if (!input.test(fName)){
    firstNamePrompt.innerHTML = "* Enter the first name"
    firstNamePrompt.style.color= "#ff0000";
    return false;
  }
}

function validateLastName(){
  var lName = document.getElementById("lastName").value;
  var input = /[a-zA-Z]{1,10}/;

  if (!input.test(lName)){
    lastNamePrompt.innerHTML = "* Enter the last name"
    lastNamePrompt.style.color= "#ff0000";
    return false;
  }
}

function validateEmail(){
  var email = document.getElementById('email').value;
  if (!email.match(/.+@.+\..+/)) {
    emailPrompt.innerHTML = "* Enter the email";
    emailPrompt.style.color= "#ff0000";
  }
}

function validatePassword(confirm){
		var input1 = password.value;
		var input2 = confirm.value;
    var frag = 0;

		if(input1 != input2){
			passwordComfirmPrompt.innerHTML = "*Password and confirm password do not match";
      passwordComfirmPrompt.style.color= "#ff0000";
      frag = 1;
		}
	}

function checkPasswordLength(){
  		var psw = password.value;
      var pswLength= psw.length;
      var frag = 0;

  		if(pswLength < 8){
  			passwordPrompt.innerHTML = "*Password should be more than 8 characters";
        passwordPrompt.style.color= "#ff0000";
        frag = 1;
  		}
    }

function checkPhone(){
  var phoneNum = document.getElementById('tel').value;
  var phoneValid = /[0-9]{8,10}/;

  if (!phoneValid.test(phoneNum)) {
    phonePrompt.innerHTML = "* Enter the phone number correctly";
    phonePrompt.style.color= "#ff0000";
  }
}

function check(){
  console.log("check");
  var flag = 0;
  if(document.form.password.value != document.form.confirm.value){
    flag = 1;
  }
  else if (document.form.password.value.length < 8) {
    flag = 1;
  }
  else if (!document.form.tel.value.match(/^[0-9]+$/)) {
    flag = 1;
  }

  if (flag) {
    window.alert("Please enter the information correctly. Try again.");
    return false;
  }
  else {
    return true;
  }
}
