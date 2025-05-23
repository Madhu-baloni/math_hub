const contentDiv = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const togglebtn = document.getElementById("toggle-btn");
//toggle button
togglebtn.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar-closed")) {
    sidebar.classList.remove("sidebar-closed");
    contentDiv.style.marginLeft = "400px";
  } else {
    sidebar.classList.add("sidebar-closed");
    contentDiv.style.marginLeft = "600px";
  }
});
var x = window.matchMedia("(max-width: 600px)");
togglebtn.addEventListener("click", () => {
  if (x.matches) {
    if (sidebar.classList.contains("sidebar-closed")) {
      contentDiv.style.marginLeft = "0";
    } else {
      contentDiv.style.marginLeft = "10px";
    }
  }
});
//By default open ui
contentDiv.innerHTML = `<h2>Addition</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<input type = 'number' id = 'num2' placeholder = 'Number 2'>
<button id = 'calculate-sum'>Calculate</button>
<p id ='result'></p>
`;
document.getElementById("calculate-sum").addEventListener("click", (e) => {
  e.preventDefault();
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").textContent = `result : ${result}`;
});
//Addition
document.getElementById("addition").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Addition</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<input type = 'number' id = 'num2' placeholder = 'Number 2'>
<button id = 'calculate-sum'>Calculate</button>
<p id ='result'></p>
`;
  document.getElementById("calculate-sum").addEventListener("click", (e) => {
    e.preventDefault();
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").textContent = `result : ${result}`;
  });
});
//Subtraction
document.getElementById("subtract").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Subtraction</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<input type = 'number' id = 'num2' placeholder = 'Number 2'>
<button id = 'calculate-diff'>Calculate</button>
<p id ='result'></p>
`;
  document.getElementById("calculate-diff").addEventListener("click", (e) => {
    e.preventDefault();
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 - num2;
    document.getElementById("result").textContent = `result : ${result}`;
  });
});
//Multiplication
document.getElementById("multiply").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Multiplication</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<input type = 'number' id = 'num2' placeholder = 'Number 2'>
<button id = 'calculate-multiplication'>Calculate</button>
<p id ='result'></p>
`;
  document
    .getElementById("calculate-multiplication")
    .addEventListener("click", (e) => {
      e.preventDefault();
      const num1 = parseInt(document.getElementById("num1").value);
      const num2 = parseInt(document.getElementById("num2").value);
      const result = num1 * num2;
      document.getElementById("result").textContent = `result : ${result}`;
    });
});
//Division
document.getElementById("division").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Division</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<input type = 'number' id = 'num2' placeholder = 'Number 2'>
<button id = 'calculate-multiplication'>Calculate</button>
<p id ='result'></p>
`;
  document
    .getElementById("calculate-multiplication")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let result;
      const num1 = parseInt(document.getElementById("num1").value);
      const num2 = parseInt(document.getElementById("num2").value);
      if (num1 === 0) {
        result = 0;
      }
      result = num1 / num2;
      document.getElementById("result").textContent = `result : ${result}`;
    });
});
//Modulo
document.getElementById("modulo").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Remainder</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<input type = 'number' id = 'num2' placeholder = 'Number 2'>
<button id = 'calculate-modulo'>Calculate</button>
<p id ='result'></p>
`;
  document.getElementById("calculate-modulo").addEventListener("click", (e) => {
    e.preventDefault();
    let result;
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    if (num1 === 0) {
      result = 0;
    }
    result = num1 % num2;
    document.getElementById("result").textContent = `result : ${result}`;
  });
});
//Even/Odd
document.getElementById("even-odd").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Even/Odd</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<button id = 'evenodd'>Calculate</button>
<p id ='result'></p>
`;
  document.getElementById("evenodd").addEventListener("click", (e) => {
    e.preventDefault();
    let result;
    const num1 = parseInt(document.getElementById("num1").value);
    if (num1 % 2 === 0) {
      result = `${num1} is a even number`;
    } else {
      result = `${num1} is not a even number`;
    }
    document.getElementById("result").textContent = `result : ${result}`;
  });
});
//palindrome
document.getElementById("palindrome").addEventListener("click", (e) => {
  contentDiv.innerHTML = `<h2>Palindrome</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<button id = 'check-palindrome'>Calculate</button>
<p id ='result'></p>`;
  document.getElementById("check-palindrome").addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = parseInt(document.getElementById("num1").value);
    let result;
    let originalNum = num1;
    let revNum = "";
    let rem = 0;
    while (num1 > 0) {
      rem = num1 % 10;
      revNum += rem;
      num1 = Math.floor(num1 / 10);
    }
    console.log(originalNum, revNum);
    result =
      originalNum === +revNum
        ? `${originalNum} is palindromic number`
        : `${originalNum} is not palindromic number`;
    document.getElementById("result").textContent = `result: ${result}`;
  });
});
//Factorial
document.getElementById("factorial").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Factorial</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<button id = 'calculate-factorial'>Calculate</button>
<p id ='result'></p>`;
  document
    .getElementById("calculate-factorial")
    .addEventListener("click", (e) => {
      e.preventDefault();
      const num1 = parseInt(document.getElementById("num1").value);
      let result;
      // console.log(num1);
      if (num1 < 0) {
        result = "enter only positive number";
        document.getElementById("result").textContent = `${result}`;
      } else {
        let fact = 1;
        for (let i = 1; i <= num1; i++) {
          fact = fact * i;
        }
        result = fact;
        document.getElementById(
          "result"
        ).textContent = `Factorial of ${num1} is : ${result}`;
      }
    });
});
//fibonacci
document.getElementById("fibonacci").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Fibonacci</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<button id = 'calculate-fibonacci'>Calculate</button>
<p id ='result'></p>`;
  document
    .getElementById("calculate-fibonacci")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let result;
      const num1 = parseInt(document.getElementById("num1").value);
      let arr = [0, 1];
      for (let i = 2; i < num1; i++) {
        let s = arr[i - 2] + arr[i - 1];
        arr.push(s);
      }
      result = arr[arr.length - 1] + arr[arr.length - 2];
      document.getElementById(
        "result"
      ).textContent = `Fibonacci of ${num1} is : ${result}`;
    });
});
//ArmstrongNum
document.getElementById("ArmstrongNum").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Armstrong Number</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<button id = 'check-armstrong'>Calculate</button>
<p id ='result'></p>`;
  document.getElementById("check-armstrong").addEventListener("click", (e) => {
    e.preventDefault();
    let result;
    let num1 = parseInt(document.getElementById("num1").value);
    let original = num1;
    let r = 0;
    let temp = 0;
    let num = num1.toString();
    let lengthofNum = num.length;
    while (num1 > 0) {
      r = num1 % 10;
      temp += r ** lengthofNum;
      num1 = Math.floor(num1 / 10);
    }
    result =
      original === temp
        ? `${original} is a Armstrong number`
        : `${original} is not a Armstrong number`;
    document.getElementById("result").textContent = `result : ${result}`;
  });
});
//perfectNum
document.getElementById("perfectNum").addEventListener("click", () => {
  contentDiv.innerHTML = `<h2>Perfect Number</h2>
<input type = 'number' id = 'num1' placeholder = 'Number 1'>
<button id = 'check-perfect'>Calculate</button>
<p id ='result'></p>`;
  document.getElementById("check-perfect").addEventListener("click", (e) => {
    e.preventDefault();
    let result;
    const num1 = parseInt(document.getElementById("num1").value);
    let sumOfDivisor = 0;
    for (let i = 1; i < num1; i++) {
      if (num1 % i === 0) {
        // console.log(i);
        sumOfDivisor += i;
      }
    }
    // console.log(sumOfDivisor, num1);
    result =
      sumOfDivisor === num1
        ? `${num1} is a Perfect number`
        : `${num1} is not a Perfect number`;
    document.getElementById("result").textContent = `result : ${result}`;
  });
});
