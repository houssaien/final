// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//verif equal password
var password = document.getElementById("pwd")
var  confirm_password = document.getElementById("pwd1");

function validatePassword(){
    

  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//validate mail
function validateEmail()
{
        let email = document.getElementById('email');    
        let mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!mailformat.test(email.value)) 
        {
            alert('Please enter a valid email address');
           
            return false; 
        }
        else{
            
        return true;
        }
        
        

}
//validate password
function validatepwd()
{
        let pwd = document.getElementById('pwd');    
        let pwdformat =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
        if (!pwdformat.test(pwd.value)) 
        {
            alert('Please enter a valid Password');
           
            return false; 
        }
        else{
            
        return true;
        }
        

}