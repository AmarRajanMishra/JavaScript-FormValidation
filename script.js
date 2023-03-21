let name = document.getElementById('name')
let email = document.getElementById('email')
let pwd = document.getElementById('password')
let cnf = document.getElementById('confirm-password')

function formValidation(){
    let returnValue = true
    // console.log(name.value.length)
    if(name.value.length < 3){
        // console.log('Name Must Be Atleast 3 Character')
        document.getElementById('nameError').innerHTML = 'Name must be atleast 3 Character'
        returnValue = false
    }
    if(email.value.includes('@')){
        returnValue = true
    }else{
        document.getElementById('emailError').innerHTML = 'Email Must Contain @'
        returnValue = false
    }
    if(pwd.value.length < 8){
        document.getElementById('passwordError').innerHTML = 'Password Must be atleast 8 character'
        returnValue = false
    }
    if(pwd.value != cnf.value){
        document.getElementById('cnfPwdError').innerHTML = 'Password Must Match'
        returnValue = false
    }
    
    return returnValue
}




















// let fname = document.getElementById('name')
// let femail = document.getElementById('email')
// let pwd = document.getElementById('password')
// let cnf = document.getElementById('confirm-password')

// function formValidate(){
//     let returnVal = true;
//     if(fname.value.length < 3){
//         document.getElementById('nameError').innerHTML = "Name must Be Atleast 3 Character"
//         returnVal = false
//     }
//     // console.log(femail.value.includes('@'))
//     if(!femail.value.includes('@')){
//         document.getElementById('emailError').innerHTML = 'Email Must Contain @'
//         returnVal = false
//     }
//     if(pwd.value.length < 8){
//         document.getElementById('passwordError').innerHTML = 'Password Must Be Atleast * Character'
//         returnVal = false
//     }
//     if(pwd.value != cnf.value){
//         document.getElementById('cnfPwdError').innerHTML = 'Password Must Match'
//         returnVal = false
//     }
//     return returnVal;
// }

// let a = 'Ajay'
// console.log(a.includes('j'))
















// let name = document.getElementById('name')
// let userName = document.getElementById('username')
// let userEmail = document.getElementById('email')
// let userNumber = document.getElementById('number')
// let password = document.getElementById('password')
// let confirmPassword = document.getElementById('confirm-password')

// function validate(){
//     var returnVal = true;
//     if(name.value.length < 3){
//         document.getElementById('nameError').innerHTML = 'Name must be atleast 3 character'
//         returnVal = false;
//     }
//     if(password.value.length < 8){
//         document.getElementById('passwordError').innerHTML = 'Password must be minimum 8 character'
//         returnVal = false;
//     }
    
//     if(userEmail.value.match(/[\@]/)){
//         returnVal = true;

//     }else{
//         document.getElementById('emailError').innerHTML = 'Email must contain @'
//         returnVal = false;
//     }   
//     if(password.value != confirmPassword.value){
//         document.getElementById('cnfPwdError').innerHTML = 'Password is not same'
//         returnVal = false;
//     }

    // return returnVal;
    // var returnVal = true;
    // if(name.value.length <= 3){
    //     document.getElementById('nameError').innerHTML ="Name must be atleast 3 character"
    //     returnVal = false
    // }
    // if(email.value.match(/[\@]/) && email.value.match(/[\$]/) ){
    //     document.getElementById('emailError').innerHTML =""
    //     returnVal = true

    // }else{
    //     document.getElementById('emailError').innerHTML ="Email must contain @"
    //     returnVal = false
    // }
    // return returnVal;
// }



// var myEmail = 'amar@gmail.com'
// myEmail.match(/[\@\$]/)

// console.log(myEmail.match(/[\@\$\[0-9]\[a-z]\[A-Z]]/))


// console.log(match(/[@-$]/))
// match(/[\@\$\[a-z]\[A-Z]\[0-9]]/)


// function validate(){
//     var returnVal = true;
//     if(name.value.length <= 3){
//         document.getElementById('nameError').innerHTML = "Name must be atleast 3 Character "
//         returnVal = false
//     }
//     if(email.value.match(/[\@]/)){
        
//         returnVal = true

//     }else{
//         document.getElementById('emailError').innerHTML =  "Email must contain @"
//         returnVal = false
//     }
//     if(password.value != confirmPassword.value){
//         document.getElementById('cnfPwdError').innerHTML = "Password Not Match"
//         returnVal = false
//     }
//    return returnVal;

// }






// match(/[a-z]/)  // lower case
// match(/[\@\$\]]/)






















// let name = document.getElementById('name')
// let userName = document.getElementById('username')
// let email = document.getElementById('email')
// let mobileNum = document.getElementById('number')
// let password = document.getElementById('password')
// let confirmPassword = document.getElementById('confirm-password')

// function validate(e){
//     event.preventDefault();
//     if(name.value == ""){
//         document.getElementById('nameError').innerHTML = "Name is Empty"
//     }else if(name.value.length < 3){
//         document.getElementById('nameError').innerHTML = "Name required minimum 3 Character"

//     }else{
//         document.getElementById('nameError').innerHTML = ""
//     }
//     if(password.value == ""){
//         document.getElementById('passwordError').innerHTML = "Password is Empty"

//     }else if(password.value.length < 8 || password.value.length >15){
//         document.getElementById('passwordError').innerHTML = "Password must be 8 - 15 Character"

//     }else{
//         document.getElementById('passwordError').innerHTML = ""

//     }

    
// }














// function validate(e){
//     event.preventDefault();
//     var name = document.userForm.name
//     var username = document.userForm.username
//     var email = document.userForm.email
//     var number = document.userForm.number
//     var password = document.userForm.password
//     var confirmPassword = document.userForm.confirm-password
//     if(name.value.length <= 0){
//         alert("Name is Required")
//         name.focus();
//         return false
//     }
//     console.log(document.userForm)
// }