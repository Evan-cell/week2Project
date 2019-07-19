var YY =parseInt(prompt("Enter your year of birth"));
var MM= parseInt(prompt("Enter your month of birth"));
var DD = parseInt(prompt("Enter your day of birth")) ;
var CC = parseInt(prompt("Enter your century"));
var gender = prompt("Enter your gende")
var dayOfTheWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
 dayOfTheWeek.toFixed(0);
var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday","Friday","Surtaday"];
if(days[0] && gender == female){
    alert("akosua");
}
else if (days[1] && gender == female){
    alert("Adwoa");
}
else if (days[2] && gender == female){
    alert("Abenaa");
}
else if (days[3] && gender == female){
    alert("Akua");
}
else if (days[4] && gender == female){
    alert("yaa");
}
else if(days[5] && gender == female){
    alert("Afua");
}
else if(days[6] && gender == female){
    alert("Ama")
}
else{
    alert("invalid Date")
}