function submition() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var Issue = document.getElementById("Issue").value;
  var errorMessage = document.getElementById("errorMessage");
  var errorText = document.getElementById("errorText");
  var text;

  errorMessage.style.padding = "0.2rem";

  if (name.length < 4 || name.length > 20) {
    text = "Please enter a valid name!";
    // errorMessage.innerText = text;
    errorText.innerText = text;
    return false;
  } else if (email.indexOf("@") == -1 || email.length < 15) {
    text = "Please enter a valid email!";
    errorMessage.innerText = text;
    return false;
  } else if (Issue.length < 30) {
    text = "Please enter a valid issue with at least a length of 30 words!";
    errorMessage.innerText = text;
    return false;
  } else if (Issue.length > 150) {
    text = "Please enter a valid issue with a length smaller than 150!";
    errorMessage.innerText = text;
    return false;
  } else {
    errorMessage.style.display = "none";
    name = null;
    email = null;
    Issue = null;
    text = "Form submitted successully!";
    errorMessage.innerText = text;
    return true;
  }
}
