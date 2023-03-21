let fpass = document.getElementById('fpass')
let upper = document.getElementById('upper')
let lower = document.getElementById('lower')
let spcl = document.getElementById('spl_char')
let num = document.getElementById('num')

function passwordValidation(){
    if(fpass.value.match(/[A-Z]/)){
        upper.style.color = 'green'
    }else{
        upper.style.color = 'red'
    }
    if(fpass.value.match(/[a-z]/)){
        lower.style.color = 'green'
    }else{
        lower.style.color = 'red'
    }
    if(fpass.value.match(/[\@\$]/)){
        spcl.style.color = 'green'
    }
    else{
        spcl.style.color = 'red'
    }
    if(fpass.value.match(/[0-9]/)){
        num.style.color = 'green'
    }else{
        num.style.color = 'red'
    }
}


























// let fpass = document.getElementById('fpass')
// let upper = document.getElementById('upper')
// let lower = document.getElementById('lower')
// let spl_char = document.getElementById('spl_char')
// let num = document.getElementById('num')

// function Password(){
//     if(fpass.value.match(/[A-Z]/)){
//         upper.style.color ='green'
//     }else{
//         upper.style.color = 'red'
//     }
//     if(fpass.value.match(/[a-z]/)){
//         lower.style.color = 'green'
//     }else{
//         lower.style.color = 'red'
//     }
//     if(fpass.value.match(/[\@\$\#\&\*]/)){
//         spl_char.style.color = 'green'
//     }else{
//         spl_char.style.color = 'red'
//     }
//     if(fpass.value.match(/[0-9]/)){
//         num.style.color = 'green'
//     }else{
//         num.style.color = 'red'
//     }
// }


// let name = 'My Name Is @$'
// name.match(/[A-Z]\[a-z]\@\$\[0-9]/)










// function Password(){
//     if(fpass.value.match(/[A-Z]/)){
//         upper.style.color = 'green'
//     }else{
//         upper.style.color = 'red'
//     }
//     if(fpass.value.match(/[a-z]/)){
//         lower.style.color = 'green'
//     }else{
//         lower.style.color = 'red'
//     }
// }



// function Password(){
//     if(fpass.value.match(/[A-Z]/)){
//         upper.style.color = "green"

//     }else{
//         upper.style.color = "red"
//     }
//     if(fpass.value.match(/[a-z]/)){
//         lower.style.color = "green"

//     }else{
//         lower.style.color = "red"
//     }
//     if(fpass.value.match(/[\@\$\#\&]/)){
//         spl_char.style.color = "green"
//     }else{
//         spl_char.style.color = "red"
//     }
//     if(fpass.value.match(/[0-9]/)){
//         num.style.color = "green"

//     }else{
//         num.style.color = "red"
//     }
// }