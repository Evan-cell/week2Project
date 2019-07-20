function akanNames(){
    var firstname, lastname;
    firstname = document.getElementById("FName").value;
    console.log(firstname);
    lastname = document.getElementById("lastName").value;
    console.log(lastname);
    var input = document.getElementById("birthDate").value;
    var data = new Date(input);
    var YY = data.getFullYear();
    var MM = data.getMonth();
    var DD = data.getDate();
    console.log(YY);
    console.log(MM);
    console.log(DD);
// var CC = parseInt(prompt("Enter the century digits"));
// 
var yourGender = document.getElementById("gender1")
console.log(yourGender);
var dayOfTheWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
var answer = Math.floor(dayOfTheWeek);
// var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday","Friday","Surtaday"];
switch(true){
    case answer===0 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is AKOSUA";
        break;
    case answer===1 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is ADWOA";
        break; 
    case answer===2 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is ABENAA";
        break;
    case answer===3 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is AKUA";
        break;
    case answer===4 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is YAA";
        break;
    case answer===5 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is AFUA";
        break;
    case answer===6 && gender==="female":
        document.getElementById("display").innerHTML = "Your Akan name is AMA";
        break;
    case answer===0 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is KWASI";
        break;
    case answer===1 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is KWADWO";
        break; 
    case answer===2 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is KWEBENA";
        break;
    case answer===3 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is KWAKU";
        break;
    case answer===4 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is YAW";
        break;
    case answer===5 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is KOFI";
        break;
    case answer===6 && gender==="male":
        document.getElementById("display").innerHTML = "Your Akan name is KWAME";
        break;
    default:
        alert("Invalid days");
}
}
