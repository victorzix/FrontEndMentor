let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let result = document.getElementById("resultContainer");
let date = new Date();

let nowDay = date.getDate();
let nowMonth = 1 + date.getMonth();
let nowYear = date.getFullYear();

let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (dayInput.value > nowDay) {
  nowDay += month[nowMonth - 1];
}
if (monthInput.value > nowMonth) {
  nowMonth += 12;
  nowYear -= 1;
}

result.innerHTML = `
          
          <span class="result"> --- </span> <span> years</span>  <br>
          <span class="result"> --- </span> <span> months</span>  <br>
          <span class="result"> --- </span> <span> days</span>  <br>
          `;

function checkInput() {
  let d = nowDay - dayInput.value;
  let m = nowMonth - monthInput.value;
  let y = nowYear - yearInput.value;
  if (yearInput.value == ""){
    y = "---";
    result.innerHTML = `
          
          <span class="result"> ${y} </span> <span> years</span>  <br>
          <span class="result"> ${m}</span> <span> months</span>  <br>
          <span class="result"> ${d}</span> <span> days</span>  <br>
          `;

  } 
  if (monthInput.value == "" || (monthInput.value < 1 || monthInput > 31)) {
    m = "---";
    result.innerHTML = `
            
            <span class="result"> ${y} </span> <span> years</span>  <br>
            <span class="result"> ${m} </span> <span> months</span>  <br>
            <span class="result"> ${d}</span> <span> days</span>  <br>
            `;
  }

  if (dayInput.value == "") {
    d = "---";
    result.innerHTML = `
            
            <span class="result"> ${y} </span> <span> years</span>  <br>
            <span class="result"> ${m}</span> <span> months</span>  <br>
            <span class="result"> ${d} </span> <span> days</span>  <br>
            `;
  } else {
    result.innerHTML = `
              <span class="result"> ${y}</span> <span> years</span>  <br>
              <span class="result"> ${m}</span> <span> months</span>  <br>
              <span class="result"> ${d}</span> <span> days</span>  <br>
          `;
  }
}
