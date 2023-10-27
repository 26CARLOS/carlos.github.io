const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




let decrementButton = document.getElementById('decrement');
let incrementButton = document.getElementById('increment');
let countDisplay = document.getElementById('count');

if (decrementButton) {
  decrementButton.addEventListener('click', () => {
    let count = Number(countDisplay.innerText);
    countDisplay.innerText = count - 1;
    if (count - 1 < 0) {
      countDisplay.style.color = "red";
    }
  });
}
if(incrementButton){
incrementButton.addEventListener('click', () => {
  let count = Number(countDisplay.innerText);
  countDisplay.innerText = count + 1;
  if (count + 1 >= 0) {
    countDisplay.style.color = "black";
  }
});
}






