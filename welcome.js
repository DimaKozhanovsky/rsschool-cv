 'use strict'

 const btn_red = document.querySelector('.button-1');
const btn_blue = document.querySelector('.button-12');
 const demo = document.querySelector('.demo');
 const main_conteiner = document.querySelector('.container');
//  const currentData14 = new Date( "31 December 1995 23:59:59");
//  const currentData70 = new Date ("31 December 1952  23:59:59")
//  console.log(currentData14);
//  console.log(currentData70)
//  document.write("getTimefor14()" + currentData14.getTime());
//  document.write("getTimefor70()" +"  "+ currentData70.getTime());


 btn_red.addEventListener('click', myFunction)
 btn_blue.addEventListener('click', myNoFunction)

 function myFunction() {
    console.log("check")
    demo.classList.toggle( 'ds_demo_none' );
     main_conteiner.classList.toggle( 'ds_none' )

   // document.querySelector('.ds_none').remove();
   // document.querySelector('.demo').remove();
   document.body.style.overflow = "scroll";//добовляем тег артибут и свойства 
   ScrollToTarget()
  
 }
 function myNoFunction() {
   window.location = "https://github.com/DimaKozhanovsky"
 }


 function catchLike() {
   document.querySelectorAll('.btn')  
 }
 function ScrollToTarget() {
   document.querySelector('#test1').scrollIntoView({block: "center", behavior: "smooth"});
 }

 const btn = document.querySelector('.btn');
 const counter = document.querySelector('.counter span'); //?
 const enlarge = document.querySelector('.enlarge');
 const enlarge2 = document.querySelector('.enlarge2');
 let counterState = 0
 const sound = new Audio("./assets/images/SoundLike.mp3");
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
    sound.play()
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
setState() // функции вызывать снаружи в type model
//  в функции нельзя создавать лисенеры 
// 41-43описан и храгнится в web api 46-49  
 // иницализация ( событие выпониться только когда я кликну на кнопку)
// ПОЧИТАТЬ РЕДАКС
//перет тка как 40 строчка проверять есть и лока сторадже
//  а в 42 уже ложим сетаем значение 



//     }
//     this.options.offset = (offset + 1) % (this.list.length + size - 1);
//  }
// }
// class Rain {
// constructor({target,row}){
//   this.element = document.createElement('p');
//   this.element.className = "bob"
//   this.build(row);
//   if (target){
//     target.appendChild(this.element);
//   }
//   this.drop();
// }
// build(row = 20){
//   let root = document.createDocumentFragment(); // добовляем как бы вне дом дерева 
//   let chars = [];
//   for (let i = 0; i < row ; ++i) {
//     let c = new Char();
//     root.appendChild(c.element);
//     chars.push(c);
//     if (Math.random() < .5){
//       loop(() => c.mutate(),r(1e3,5e3));
//     }
//   }
// this.trail = new Trail(chars,{
//   size : r(10,30),offset : r(0,100)
// })
// this.element.appendChild(root)
// }
// drop(){
//   let trail = this.trail;
//   let len = trail.body.length;
//   let delay = r(10,80);
//   loop(() => {
//     trail.move();
//     trail.traverse((c, i, last) => {
//       c.element.style = `
//         color: hsl(136, 100%, ${85 / len * (i + 1)}%)
//       `;
//       if (last) {
//         c.mutate();
//         c.element.style = `
//           color: hsl(136, 100%, 85%);
//           text-shadow:
//             0 0 .5em #fff,
//             0 0 .5em currentColor;
//         `;
//       }
//     });
//   }, delay);

// }
// }

// const main = document.querySelector("demo");
// for (let i = 0 ; i<50 ; ++i){
//   new Rain({target : demo , row: 50});
// }