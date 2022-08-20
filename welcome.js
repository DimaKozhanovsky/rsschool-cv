
function myFunction() {
  document.querySelector('.bg-image').remove();
  document.querySelector('.demo').remove()
}
function myNoFunction() {
  window.location = "https://github.com/DimaKozhanovsky"
}
function catchLike() {
  document.querySelectorAll('.btn')  
}

const btn = document.querySelector('.btn');
const counter = document.querySelector('.counter span');
const enlarge = document.querySelector('.enlarge');

let counterState = 0
const myStorage = window.localStorage.getItem("likeCounter");
if (myStorage) {
  counterState = Number(myStorage);
  console.log(myStorage);
}

const setState = () => {
  counter.textContent = counterState;
  window.localStorage.setItem("likeCounter", counterState.toString());
}

btn.addEventListener('click', (event) => { 
  counterState += 1
  enlarge.classList.add('pss')

  setState()
  console.log(event)
})

enlarge.addEventListener('transitionend', () => {
  enlarge.classList.remove('pss')
})
setState()





// 41-43описан и храгнится в web api 46-49  
 // иницализация ( событие выпониться только когда я кликну на кнопку)
// ПОЧИТАТЬ РЕДАКС
//перет тка как 40 строчка проверять есть и лока сторадже
//  а в 42 уже ложим сетаем значение 