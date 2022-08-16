function scuberGreetingForFeet(sample){
 if(sample<=400){
  return 'This one is on me!';

 } else if(sample > 2500) {
return 'No can do.';
 } else if(sample > 2000) {
 return 'I will gladly take your thirty bucks.';
 }
}

function ternaryCheckCity(city){
  const findCity = city==="NYC"? "Ok, sounds good." : "No go."
  return findCity;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case (tip = "generous"):
      return  "Thank you so much.";
      break;
    case (tip = "not as generous"):
      return  "Thank you.";
      break;
    default:  
      return  'Bye.'; 
  }
}