let selectedRating = null;
const subBtn = document.getElementById('subBtn')
let result = document.getElementById('result')
const resultContainer = document.getElementById('resultContainer')
const ratingContainer = document.getElementById('ratingContainer')


resultContainer.style.display = 'none'


document.addEventListener("click", (e) => {
  let el = e.target;

  if (el.classList.contains("btn1")) return (selectedRating = 1);
  if (el.classList.contains("btn2")) return (selectedRating = 2);
  if (el.classList.contains("btn3")) return (selectedRating = 3);
  if (el.classList.contains("btn4")) return (selectedRating = 4);
  if (el.classList.contains("btn5")) return (selectedRating = 5);
});

subBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    result.textContent =`You selected ${selectedRating}`
    ratingContainer.style.display = 'none'
    setTimeout(() => {
        resultContainer.style.display = ''
    }, 200);
    
    
    
})