// code your solution here
function saturdayFun(todo = "roller-skate") {
  return `This Saturday, I want to ${todo}!`;
}

const mondayWork = function (todo = "go to the office") {
  return `This Monday, I will ${todo}.`;
};

mondayWork();

//

function wrapAdjective(flair) {
  return function (adj = "special") {
    return `You are ${flair}${adj}${flair}!`;
  };
}

// const encouragingPromptFunction = wrapAdjective("*");

// console.log(encouragingPromptFunction("a hard worker")); // Output: "You are *a hard worker*!"
// console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are *a dedicated programmer*!"

// const alternativeFlairFunction = wrapAdjective("||");

// console.log(alternativeFlairFunction("a hard worker")); // Output: "You are ||a hard worker||!"
// console.log(alternativeFlairFunction("a dedicated programmer")); // Output: "You are ||a dedicated programmer||!"
