///easy///
function excercise(workouts) {
  return () => {
    return `Today's exercise ${workouts}`;
  };
}

// prints "Today's exercise: running"
let run = excercise("running");
let swim = excercise("swimming");

console.log(swim());
console.log(run());
// prints "Today's exercise: running"

// prints "Today's exercise: swimming"
