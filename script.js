var CC;
function akanNames(){
    var firstname, lastname;
    firstname = document.getElementById("FName").value;
    console.log(firstname);
    lastname = document.getElementById("lastName").value;
    console.log(lastname);
    var input = document.getElementById("birthDate").value;
    var data = new Date(input);
    var YY = data.getFullYear();
    console.log(YY);
    CC = (YY/100)+1;
    console.log(CC);
    var MM = data.getMonth();
    MM++;
    console.log(MM);
    var DD = data.getDate();
    console.log(DD);
    var Gender = document.getElementById("gender").value;
    if(Gender === "female1"){
        var gender1 ="Female";
        console.log(gender1);
    }
    else{
        gender1 = "male1";
        console.log(gender1);
    }
    console.log(gender1);
    // var Genderml = document.getElementById("male1").value;
    // console.log(Genderml);
    var dayOfTheWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    var answer = Math.floor(dayOfTheWeek);
    console.log(answer);
    var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday","Friday","Surtaday"];
    var a = days.indexOf("Sunday");
    var b = days.indexOf("Monday");
    var c = days.indexOf("Tuesday");
    var d = days.indexOf("Wednesday");
    var e = days.indexOf("Thusday");
    var f = days.indexOf("Friday");
    var g = days.indexOf("Surtaday");
switch(true){
    case (answer===a && gender1 ==="female1"):
        document.getElementById("display").innerHTML = "Your Akan name is AKOSUA";
        break;
    case (answer===b && gender1==="Female"):
        document.getElementById("display").innerHTML = "Your Akan name is ADWOA";
        break; 
    case (answer===c && gender1 ==="Female"):
        document.getElementById("display").innerHTML = "Your Akan name is ABENAA";
        break;
    case (answer===d && gender1 ==="Female"):
        document.getElementById("display").innerHTML = "Your Akan name is AKUA";
        break;
    case (answer===e && gender1 ==="Female"):
        document.getElementById("display").innerHTML = "Your Akan name is YAA";
        break;
    case (answer===f && gender1 ==="Female"):
        document.getElementById("display").innerHTML = "Your Akan name is AFUA";
        break;
    case (answer===g && gender1 ==="Female"):
        document.getElementById("display").innerHTML = "Your Akan name is AMA";
        break;
    case (answer===a && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is KWASI";
        break;
    case (answer===b && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is KWADWO";
        break; 
    case (answer===c && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is KWEBENA";
        break;
    case (answer===d && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is KWAKU";
        break;
    case (answer===e && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is YAW";
        break;
    case (answer===f && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is KOFI";
        break;
    case (answer===g && gender1==="Male"):
        document.getElementById("display").innerHTML = "Your Akan name is KWAME";
        break;
    default:
        document.getElementById("display").innerHTML = "Invalid days";
}
}
console.log(akanNames());