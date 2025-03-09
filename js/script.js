function generateThreeRandomNumbers() {
    const num1 = Math.ceil(Math.random() * 20);
    const num2 = Math.ceil(Math.random() * 20);
    const num3 = Math.ceil(Math.random() * 20);
    return { num1, num2, num3 };
  }
  
  function displayRandomNumbers() {
    const numbers = generateThreeRandomNumbers();
    const outputDiv1 = document.getElementById("randomNumber1");
    const outputDiv2 = document.getElementById("randomNumber2");
    const outputDiv3 = document.getElementById("randomNumber3");
    const biggestDiv = document.getElementById("biggestnum");
    const letterDiv = document.getElementById("letter");
    const timeBreakdownDiv = document.getElementById("timeBreakdown"); 
  
    if (outputDiv1 && outputDiv2 && outputDiv3 && biggestDiv && letterDiv && timeBreakdownDiv) 
    { 
      outputDiv1.textContent = numbers.num1;
      outputDiv2.textContent = numbers.num2;
      outputDiv3.textContent = numbers.num3;
      biggestDiv.textContent = "The missing number for the passcode to unlock the passage door is: " + Math.max(numbers.num1, numbers.num2, numbers.num3);
  
      const letterIndex = numbers.num1 - 1;
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const letter = alphabet.charAt(numbers.num1 - 1);
  
      if (letter) {
        letterDiv.textContent = "The letter needed in the passcode is: " + letter;
      } else {
        letterDiv.textContent = "Invalid letter index.";
      }
  
      const totalMin = numbers.num2 * numbers.num3;
      const hours = Math.floor(totalMin / 60);
      const minutes = totalMin % 60;
      timeBreakdownDiv.textContent = "The remaining time to complete this passcode is: "  + hours + " hours and " + minutes + " minutes";
    } 
    else 
    {
      if (!outputDiv1 || !outputDiv2 || !outputDiv3)
      {
        console.error("One or more elements with id 'randomNumber' not found.");
      }
      if (!biggestDiv) 
      {
        console.error("Element with id 'biggestnum' not found.");
      }
      if (!letterDiv) {
        console.error("Element with id 'letter' not found.");
      }
      if (!timeBreakdownDiv)
      { 
        console.error("Element with id 'timeBreakdown' not found.");
      }
    }
  }
  
  displayRandomNumbers();