
function myFunction() {
    document.querySelector('.bg-image').remove();// документ элемент родитель 
      document.querySelector('.demo').remove()

    // if (confirm("Press a button!")) {
    //   document.querySelector('.bg-image').classList.remove('bg-image');
    //   document.querySelector('.demo').remove()
    // } else {
      
    // }
    // document.getElementById("demo").innerHTML = txt;
  }
  function myNoFunction(){
    window.location ="https://github.com/DimaKozhanovsky"
  }
function catchLike (){
document.querySelectorAll('.btn') // находим кнопку 
}

 //const counters = document.getElementsByTagName('.data-target'); //возвращает один элемент

//  counters.forEach((counter) => {
//   counter.innerText = '0'
// const updateCounter = () => {
//   const target = +counter.querySelector('.btn');
//   console.log(typeof target,target)
//   const c = +counter.innerText;
//   if (c<target) {
//     counter.innerText = '${c+increment}'
//   }
  
//   console.log(target)
// };
// updateCounter()
// }); 

const btn = document.querySelector('.btn');
const counter = document.querySelector('.counter span');
let counterState = 0
const myStorage = window.localStorage.getItem("likeCounter");
if (myStorage) {
 counterState = Number(myStorage);
 console.log(myStorage);
}
   // начальнре и текушее значение коутера 
const setState = ()=> {  // изменет коунтер 
  counter.textContent = counterState;
  window.localStorage.setItem("likeCounter",counterState.toString());
}


btn.addEventListener('click',(event)=>{ // клики на реальном айосе могут работать не корректно так как клики не тачи ( особено при окривом css) второй агрумент в коде показвает что должно выполнять по нажатию на клик
counterState +=1
setState()
console.log(event)
}) // 41-43описан и храгнится в web api 46-49  
setState() // иницализация ( событие выпониться только когда я кликну на кнопку)
// ПОЧИТАТЬ РЕДАКС 
//перет тка как 40 строчка проверять есть и лока сторадже
//  а в 42 уже ложим сетаем значение 