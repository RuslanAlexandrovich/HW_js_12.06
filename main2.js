// let car={
//     manufacturer: "Audi",
//     model: "A4",
//     year: 2015,
//     speed: 100
// }
// console.log(car);
// function aboutCar() {
//      document.write(`Производитель ${car.manufacturer} Модель ${car.model} Средняя скорость ${car.speed} км.час Год выпуска ${car.year}`);
// }
// aboutCar();

// function speed(path) {
// let speedHour=0;
// speedHour=path/car.speed;
// let min=(speedHour*60)%60;
// var i=0;
// if(path>400){
//     for(; path>400; i++){
//        path=path-400;
//     }
//     console.log (i);
//     document.write(`<pre>Расстояние ${path} км проедете за ${Math.trunc(speedHour)+i} ч ${Math.trunc(min)} мин </pre>`);
// }else
//     document.write(`<pre>Расстояние ${path} км проедете за ${Math.trunc(speedHour)} ч ${Math.trunc(min)} мин </pre>`);
// }
// speed(+prompt("Растояние км"));








// let fraction1 = createFraction(+prompt("Перший чисельник"),+prompt("Перший знаменник"));
// let fraction2 = createFraction(+prompt("Другий чисельник"),+prompt("Другий знаменник"));
// select(prompt("Оберіть потрібну функцію: 'додати, відняти, помножити, поділити, скоротити' та введіть").toLowerCase());

// function createFraction(num, denom, integer){
//     return {num, denom, integer};
// }

// function select(option){
//     switch (option) {
//                 case "додати": let sumRes = add(fraction1, fraction2);
//                 console.log(sumRes);
//                     break;
//                 case "відняти": let sumRess = minus(fraction1, fraction2);
//                 console.log(sumRess);
//                     break;
//                 case "помножити": let sumResss = multiply(fraction1, fraction2);
//                 console.log(sumResss);
//                     break;
//                 case "поділити": let sumRessss = drob(fraction1, fraction2);
//                 console.log(sumRessss);
//                     break;
//                 case "скоротити": let sumResssss = cut(fraction1);
//                                   let sumRessssss = cut2(fraction2);
//                 console.log(sumResssss);
//                 console.log(sumRessssss);
//                     break;
// }
// }

// function NOD(x,  y){
//     if(y>x) return NOD(y, x);
//     if(!y) return x;
//     return  NOD(y, x%y);
// }
// function add(fraction1, fraction2){
//     let num = fraction1.num * fraction2.denom + fraction2.num * fraction1.denom;
//     let denom  = fraction1.denom*fraction2.denom;
//     let nod = NOD(num, denom);
//     num/=nod;
//     denom /=nod; 
//     if(num>denom){
//     var integer=Math.trunc(num/denom);
//     num=num-denom;
//     }
//     if(integer===undefined){
//         integer=0;
//     }
//     return createFraction(num, denom, integer);
// }

// function minus(fraction1, fraction2){
//     let num = fraction1.num * fraction2.denom - fraction2.num * fraction1.denom;
//     let denom  = fraction1.denom*fraction2.denom;
//     let nod = NOD(num, denom);
//     num/=nod;
//     denom /=nod; 
//     if(num>denom){
//     var integer=Math.trunc(num/denom);
//     num=num-denom;
//     }
//     if(integer===undefined){
//         integer=0;
//     }
//     return createFraction(num, denom, integer);
// }

// function drob(fraction1, fraction2){
//     let num = fraction1.num * fraction2.denom;
//     let denom  = fraction1.denom*fraction2.num;
//     let nod = NOD(num, denom);
//     num/=nod;
//     denom /=nod; 
//     if(num>denom){
//     var integer=Math.trunc(num/denom);
//     }
//     if(integer===undefined){
//       integer=0;
//     }
//     return createFraction(num, denom, integer);
// }

// function multiply(fraction1, fraction2){
//     let num = fraction1.num * fraction2.num;
//     let denom  = fraction1.denom*fraction2.denom;
//     let nod = NOD(num, denom);
//     num/=nod;
//     denom /=nod; 
//     if(num>denom){
//     var integer=Math.trunc(num/denom);
//     num=num-denom;
//     }
//     if(integer===undefined){
//         integer=0;
//     }
//     return createFraction(num, denom, integer);
// }

// function cut(fraction1){
//     let num = fraction1.num;
//     let denom  = fraction1.denom;
//     let nod = NOD(num, denom);
//     num=num/nod;
//     denom=denom/nod;
//     if(num==denom){
//     var integer=Math.trunc(num/denom);
//     let i=num;
//     num=num-denom;
//     denom=denom-i;
//     } else if(num!==denom){
//         var integer=Math.trunc(num/denom);
//     num=num%denom;
//     }
//     if(integer===undefined){
//         integer=0;
//     }
//     return createFraction(num, denom, integer);
// }
// function cut2(fraction2){
//     let num = fraction2.num;
//     let denom  = fraction2.denom;
//     let nod = NOD(num, denom);
//     num=num/nod;
//     denom=denom/nod;
//     if(num==denom){
//     var integer=Math.trunc(num/denom);
//     let i=num;
//     num=num-denom;
//     denom=denom-i;
//     } else if(num!==denom){
//         var integer=Math.trunc(num/denom);
//     num=num%denom;
//     }
//     if(integer===undefined){
//         integer=0;
//     }
//     return createFraction(num, denom, integer);
// }






// let watch = createWatch(+prompt("Години"), +prompt("Хвилини"), +prompt("Секунди"));

// function createWatch(hour, minute, second) {
//     return { hour, minute, second };
// }

// function onDisplay(watch) {
//     let hour = watch.hour;
//     let minute = watch.minute;
//     let second = watch.second;
//     document.write(`Ви ввели ${hour} год ${minute} хв ${second} сек`);
//     return createWatch(hour, minute, second);
// }
// let newWatch = onDisplay(watch);
// console.log(newWatch);



// function letSec(hour, minute, second) {
//     watch.hour += hour;
//     watch.minute += minute;
//     watch.second += second;

//     if (watch.second >= 60) {
//         watch.minute += Math.trunc(watch.second / 60);
//         watch.second = watch.second % 60;
//     }

//     if (watch.minute >= 60) {
//         watch.hour += Math.trunc(watch.minute / 60);
//         watch.minute = watch.minute % 60;
//     }

//     if (watch.hour == 24) {
//         watch.hour = 0;
//     }
//     if(watch.hour > 24){
//         watch.hour=watch.hour%24;
//     }

//     document.write(`<pre> Новий час ${watch.hour} год ${watch.minute} хв ${watch.second} сек </pre>`);
//     return createWatch(watch.hour, watch.minute, watch.second);
// }

// let newTime = letSec(+prompt("Години"), +prompt("Хвилини"), +prompt("Секунди"));
// console.log(newTime);
