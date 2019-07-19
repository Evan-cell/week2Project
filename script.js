var YY =parseInt(prompt("Enter your year of birth"));
var MM= parseInt(prompt("Enter your month of birth"));
var DD = parseInt(prompt("Enter the date of your birth")) ;
var CC = parseInt(prompt("Enter the century digits"));
var gender = prompt("Enter gender whether your a male or female")
var dayOfTheWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
var answer = Math.floor(dayOfTheWeek);
// var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday","Friday","Surtaday"];
// var days = [0,1,2,3,4,5,6];
// if(days[0] && gender == female){
//     alert("akosua");
// }
// else if (days[1] && gender == female){
//     alert("Adwoa");
// }
// else if (days[2] && gender == female){
//     alert("Abenaa");
// }
// else if (days[3] && gender == female){
//     alert("Akua");
// }
// else if (days[4] && gender == female){
//     alert("yaa");
// }
// else if(days[5] && gender == female){
//     alert("Afua");
// }
// else if(days[6] && gender == female){
//     alert("Ama")
// }
// else{
//     alert("invalid Date")
// }
switch(true){
    case answer===0 && gender==="female":
        alert("AKOSUA");
        break;
    case answer===1 && gender==="female":
        alert("ADWOA");
        break; 
    case answer===2 && gender==="female":
        alert("ABENAA");
        break;
    case answer===3 && gender==="female":
        alert("AKUA");
        break;
    case answer===4 && gender==="female":
        alert("YAA");
        break;
    case answer===5 && gender==="female":
        alert("AFUA");
        break;
    case answer===6 && gender==="female":
        alert("AMA");
        break;
    case answer===0 && gender==="male":
        alert("KWASI");
        break;
    case answer===1 && gender==="male":
        alert("KWADWO");
        break; 
    case answer===2 && gender==="male":
        alert("KWEBENA");
        break;
    case answer===3 && gender==="male":
        alert("KWAKU");
        break;
    case answer===4 && gender==="male":
        alert("YAW");
        break;
    case answer===5 && gender==="male":
        alert("KOFI");
        break;
    case answer===6 && gender==="male":
        alert("KWAME");
        break;
    default:
        alert("Invalid days");
}