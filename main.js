let form = document.getElementById('form');
let password = document.getElementById('password');
let errorPassword = document.getElementById('errorPassword');
let checkThePassword = document.getElementById('checkThePassword');
let errorCheckThePassword = document.getElementById('errorCheckThePassword');

form.addEventListener('submit' , function(event){
     let error = false ;

     errorPassword .innerHTML ='';
     errorCheckThePassword .innerHTML ='';

     if(password.value.trim() === ""){
        error = true ;
        errorPassword .innerHTML ='you must enter password';

     }
     else if(password.value.trim().length< 8){
        error = true ;
        errorPassword .innerHTML ='you must enter 8 characters of the password';

     }
     if(checkThePassword.value.trim() === ""){
        error = true ;
        errorCheckThePassword .innerHTML ='you must check the password';

     }
     if(password.value.trim().length !== checkThePassword.value.trim().length ){
        error = true ;
        errorCheckThePassword .innerHTML ='you must enter the same password';

     }
     if(error){
        event.preventDefault();
     }
}
)