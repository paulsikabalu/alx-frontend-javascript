export default function taskBlock(trueOrFalse) {
    let task = false; // Use let instead of var
    let task2 = true; // Use let instead of var
  
    if (trueOrFalse) {
      task = true; // Assign to the existing variables without redeclaring them
      task2 = false; // Assign to the existing variables without redeclaring them
    }
  
    return [task, task2];
  }
  