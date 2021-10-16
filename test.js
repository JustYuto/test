function validateFirstName(){
  var fName = document.getElementById("firstName").value;
  var input = /[a-zA-Z]{1,10}/;

  if (input.test(fName)){
    return true;
  }
  else{
    firstNamePrompt.innerHTML = "*Enter the first name"
    firstNamePrompt.style.color= "#ff0000";
    return false;
  }
}

function validateLastName(){
  var lName = document.getElementById("lastName").value;
  var input = /[a-zA-Z]{1,10}/;

  if (input.test(lName)){
    return true;
  }
  else{
    lastNamePrompt.innerHTML = "*Enter the last name"
    lastNamePrompt.style.color= "#ff0000";
    return false;
  }
}
