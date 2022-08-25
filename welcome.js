
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
const enlarge2 = document.querySelector('.enlarge2');
let counterState = 0
const myStorage = window.localStorage.getItem("likeCounter"); // если есть нет до достаем 
const newImage = document.querySelector(`#test1`);
if (myStorage) {  // если он null  то не зайдет 
  counterState = Number(myStorage); // из строки в чиисо 
  console.log(myStorage);
}

const setState = () => {
  counter.textContent = counterState; // задаем текствое содержимае '.counter span
  console.log(newImage) ;
  window.localStorage.setItem("likeCounter", counterState.toString()); // добавляем новое ключ и значение 
}

btn.addEventListener('click', (event) => { 
  counterState += 1 ;
// if (counter) > 100 counter.classList.remove("counter");
    
//  }
  // спросить про тогл тогл это ка будто события нет не лучшийвариант нарушение mvc
  enlarge.classList.add('pss');
 newImage.classList.add(`pss`);
 enlarge2.classList.add('pss');

  setState()
  console.log(event)
})


enlarge2.addEventListener('transitionend',() => {
  newImage.classList.remove('pss');  // как только транзишион закнчивается удаляется класс с увелечнеим картинки pss
  enlarge2.classList.remove('pss')// для класаа enlarge 2  переход длится дольше 
})

enlarge.addEventListener('transitionend', () => {
  enlarge.classList.remove('pss');
  
})
setState()

// 41-43описан и храгнится в web api 46-49  
 // иницализация ( событие выпониться только когда я кликну на кнопку)
// ПОЧИТАТЬ РЕДАКС
//перет тка как 40 строчка проверять есть и лока сторадже
//  а в 42 уже ложим сетаем значение 