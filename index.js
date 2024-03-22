// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const newActivity = "bathe my dog";
  console.log(saturdayFun(newActivity));
  console.log(saturdayFun()); 

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
  const newMonday =  "work from home";
  console.log(mondayWork(newMonday));
  console.log(mondayWork());
  
  function wrapAdjective(noun) {
    return function(adjective) {
      return `You are ${noun}${adjective}${noun}!`;
    }
  }
  