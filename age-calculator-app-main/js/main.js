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

  if (yearInput.value == "") {
    yearInput.style.outline = "1px solid red";
    document.getElementById("yearError").innerText = "";
    document.getElementById("yearError").innerText = "Can't be empty";
    y = "---";
    result.innerHTML = `
        
        <span class="result"> ${y} </span> <span> years</span>  <br>
        <span class="result"> ${m}</span> <span> months</span>  <br>
        <span class="result"> ${d}</span> <span> days</span>  <br>
        `;
  } else if (yearInput.value.length < 4 || yearInput.value.length > 4) {
    yearInput.style.outline = "1px solid red";
    document.getElementById("yearError").innerText = "Min. 4 Numbers";
  } else if (y < 0) {
    yearInput.style.outline = "1px solid red";
    document.getElementById("yearError").innerText = "Must be in past";
  } else {
    yearInput.style.outline = "";
    document.getElementById("yearError").innerText = "";
    result.innerHTML = `
              <span class="result"> ${y}</span> <span> years</span>  <br>
              <span class="result"> ${m}</span> <span> months</span>  <br>
              <span class="result"> ${d}</span> <span> days</span>  <br>
          `;
  }

  if (monthInput.value == "") {
    monthInput.style.outline = "1px solid red";
    m = "---";
    result.innerHTML = `
            
            <span class="result"> ${y} </span> <span> years</span>  <br>
            <span class="result"> ${m} </span> <span> months</span>  <br>
            <span class="result"> ${d}</span> <span> days</span>  <br>
            `;
  } else if (monthInput.value > 12 || monthInput.value < 1) {
    monthInput.style.outline = "1px solid red";
    document.getElementById('monthError').innerText = 'Must be a valid month'
  }
  else {
    monthInput.style.outline = "";
    document.getElementById('monthError').innerText = ''
    result.innerHTML = `
              <span class="result"> ${y}</span> <span> years</span>  <br>
              <span class="result"> ${m}</span> <span> months</span>  <br>
              <span class="result"> ${d}</span> <span> days</span>  <br>
          `;
  }

  if (dayInput.value == "") {
    dayInput.style.outline = "1px solid red";
    d = "---";
    result.innerHTML = `
            
            <span class="result"> ${y} </span> <span> years</span>  <br>
            <span class="result"> ${m}</span> <span> months</span>  <br>
            <span class="result"> ${d} </span> <span> days</span>  <br>
            `;
  }else if(dayInput.value < 1 || dayInput.value > 31){
    dayInput.style.outline = "1px solid red";
    document.getElementById('dateError').innerText = 'Must be a valid date'
  } 
  
  else {
    dayInput.style.outline = "";
    document.getElementById('dateError').innerText = ''
    result.innerHTML = `
              <span class="result"> ${y}</span> <span> years</span>  <br>
              <span class="result"> ${m}</span> <span> months</span>  <br>
              <span class="result"> ${d}</span> <span> days</span>  <br>
          `;
  }
}
