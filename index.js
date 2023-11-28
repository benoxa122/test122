var password = "12345";

function passcheck() {

if(document.getElementById('passtest123').value != password) {
alert('Wrong password, Try Again.');
return false;
}

if(document.getElementById('passtest123').value == password) {
alert('Correct Password. Click OK to enter Webpage. Welcome To The Cool Kids Club.');
}
}
