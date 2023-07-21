const genereteBtn = document.querySelector(".generate-btn");
const generateInput = document.querySelector("#generateInput");

const calculateBtns = document.querySelectorAll(".button");
const submitInput = document.querySelector("#submitInput");
const submitBtn = document.querySelector(".submit-btn");

// const notifySection = document.querySelector('.notify-section');
const notify = document.querySelectorAll(".notify");
// const notifySuccess = notifySection.querySelector('.notify-success');

calculateBtns.forEach((btn) => btn.addEventListener("click", calculatebtnsEvent));

genereteBtn.addEventListener("click", () => {
  const generateNum = Math.floor(Math.random() * 9000) + 1000;
  generateInput.value = generateNum;
});

function calculatebtnsEvent(e) {
  const btn = e.target;

  if (btn.innerText === "C") {
    handleClear();
  } else if (btn.innerText === "<") {
    handleDelete();
  } else {
    handleCalcValue(btn.innerText);
  }
}

function handleClear() {
  submitInput.value = null;
}
function handleDelete() {
  submitInput.value = submitInput.value.slice(0, -1);
}

function handleCalcValue(value) {
  submitInput.value += value;
}

//  calculateBtns.forEach((btn) =>{
//     btn.addEventListener('click', () => {

//         if (btn.innerText == 'C') {
//             submitInput.value = '';
//         }
//          else if(btn.innerText == '<'){
//             submitInput.value = submitInput.value.slice(0, -1);
//         }
//         else {
//             submitInput.value += btn.innerText;
//         }

//      });
//  })

submitBtn.addEventListener("click", handleSubmit);

let count = document.querySelector("#count");
count.innerText = 3;

function handleSubmit() {

    if (count.innerText > 0) {
        
        if (submitInput.value === generateInput.value) {
            notify[2].style.display = "block";
          setTimeout(() => {
            notify[2].style.display = "none";
          }, 3000);
          notify[1].style.display = "none";
          notify[0].style.display = "none";
        } else if (submitInput.value == "" || generateInput.value == "") {
          notify[1].style.display = "block";
          setTimeout(() => {
            notify[1].style.display = "none";
          }, 3000);
          notify[2].style.display = "none";
          notify[0].style.display = "none";
        } else {
          notify[0].style.display = "block";
          setTimeout(() => {
            notify[0].style.display = "none";
          }, 3000);
          notify[1].style.display = "none";
          notify[2].style.display = "none";
          count.innerText--;
        }
        if(count.innerText == 0){
            notify[3].style.display = 'block';
            notify[0].style.display = 'none';
        }
      }
}
