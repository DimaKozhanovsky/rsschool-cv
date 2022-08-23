
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
const counter = document.querySelector('.counter span'); //?
const enlarge = document.querySelector('.enlarge');
let counterState = 0
const myStorage = window.localStorage.getItem("likeCounter"); // если есть нет до достаем 
if (myStorage) {  // если он null  то не зайдет 
  counterState = Number(myStorage); // из строки в чиисо 
  console.log(myStorage);
}

const setState = () => {
  counter.textContent = counterState; // задаем текствое содержимае '.counter span
  window.localStorage.setItem("likeCounter", counterState.toString()); // добавляем новое ключ и значение 
}

btn.addEventListener('click', (event) => { 
  counterState += 1 ;
// if (counter) > 100 counter.classList.remove("counter");
    
//  }
  
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