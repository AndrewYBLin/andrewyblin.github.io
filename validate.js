/*
    This function checks the Color field to make sure it is 3 characters in length
    and it checks the Quantity to make sure it is numeric and from 1 to 12.
*/
function validate() {

        /* This portion of the function checks the Email Address to make sure
        it has an @ and a dot somewhere in the address.
*/  alert("good job")
    var eaddr = document.getElementById("contact-form").email.value;
    atSign = eaddr.indexOf("@");
    dotSign = eaddr.lastIndexOf(".");
    if (atSign < 1 || ( dotSign - atSign < 2 )) {
       alert("Error in email address format!")

       return false;
    }
    alert("accepted")
    return true;
  }
