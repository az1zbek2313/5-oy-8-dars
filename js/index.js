// 1-topshiriq
// const price = [10.99, 5.45, 23.00, 7.86];

// // first and last
// [a,,,b] = price;
// console.log(a, b);

// 2
// [a, b, c, d] = price;
// let data = [];
// data.push(b);
// data.push(a);
// data.push(c);
// data.push(d);
// console.log(data);

// 3
// let data = [];
// [a, b, c, d] = price;
// b*=2;
// c*=2;
// data.push(b);
// data.push(c);
// console.log(data);

// 2-misol

// const movie1 = {
//     title:"The Matrix",
//     director:"The Wachowskis",
//     year:1999,
// };

// const movie2 = {
//     genre:"Science fiction",
//     cast:["Keanu Reeves", "Laurence Fishburne", "Carri-Anne Moss"],
// };

// 1
// let {title, director, year} = movie1;
// let {genre, cast} = movie2;

// let movie = {};
// movie.title = title;
// movie.director = director;
// movie.year = year;
// movie.genre = genre;
// movie.cast = cast;

// console.log(movie);

// 2
// let movie = {
//     title: 'The Matrix',
//     director: 'The Wachowskis',
//     year: 1999,
//     genre: 'Science fiction',
//     cast: [ 'Keanu Reeves', 'Laurence Fishburne', 'Carri-Anne Moss' ]
//   };



//   let {title, director, year, genre, cast} = movie;
//   let movie1 = {
//     title:movie.title,
//     director:movie.director,
//     year:movie.year,
//   };
//   let movie2 = {
//     genre:movie.genre,
//     cast:movie.cast,
//   };

//   console.log(movie1);
//   console.log(movie2);

// 3
// function Destructring(arg1, arg2) {
// let {title, director, year} = arg1;
// let {genre, cast} = arg2;

// let movie = {};
// movie.title = title;
// movie.director = director;
// movie.year = year;
// movie.genre = genre;
// movie.cast = cast;

// return movie;
// };
// console.log(Destructring(movie1, movie2));


// 2-topshiriq
// 1
// let retcept = ["sole", "potato", "tomato"];

// [...res] = retcept;
// res.push("rice");
// res.push("carrot");
// let newRetcept = res;
// console.log(newRetcept);

// 2
// let user1 = {
//     Name:"Abbos",
//     age:24,
//     country:"UZB"
// };

// let {...res} = user1;
// let user2 = res;

// console.log(user2);

// 3
// let userData1 = {
//     image:"picture",
//     firstName:"Shavkatjon",
//     lastName:"Isroilov",
// };

// let userData2 = {
//     userName:"shavkat1995",
//     phoneNumber:"+998881234567",
// };

// function user(...arg){
//   return arg;
// };

// let {...res} = userData2;

// let arr = user(userData1);
// arr.push(res);
// console.log(arr);

// 4
// let mass = [1, 3, 5, 2, 9, 4];

// [...res] = mass;

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }

//     return arr;
// }

// console.log(insertionSort(res));

// 5
// Savollar ingliz tilida bo'lganligi tufayli translate o'zbekchaga juda xunuk tarjima qilyapti

// CLASS

// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
// };

// let user1 = new User("John", 23);
// console.log(user1);

// MAP AND SET
// MAP
// let shoppingCartPrice = new Map();
// shoppingCartPrice.set("1", 15000);
// shoppingCartPrice.set("2", 13000);
// shoppingCartPrice.set("3", 20000);
// shoppingCartPrice.set("4", 17000);
// shoppingCartPrice.set("5", 8000);
// shoppingCartPrice.set("6", 33000);

// let shoppingCartCount = new Map();
// shoppingCartCount.set("1", 20);
// shoppingCartCount.set("2", 10);
// shoppingCartCount.set("3", 5);
// shoppingCartCount.set("4", 10);
// shoppingCartCount.set("5", 6);
// shoppingCartCount.set("6", 7);

// shoppingCartPrice.delete("4");
// shoppingCartCount.delete("4");
// let generalPrice = shoppingCartPrice.get("1")*shoppingCartCount.get("1")+shoppingCartPrice.get("2")*shoppingCartCount.get("2")+shoppingCartPrice.get("3")*shoppingCartCount.get("3")+shoppingCartPrice.get("5")*shoppingCartCount.get("5")+shoppingCartPrice.get("6")*shoppingCartCount.get("6");


// console.log(generalPrice);

// SET

// let webUrl = new Set();
// webUrl.add("https//kun.uz");
// webUrl.add("https//daryo.uz");
// webUrl.add("https//kun.uz");
// webUrl.add("https//qalampir.uz");
// webUrl.add("https//wikipedia.com");

// // console.log(webUrl.size);
// let myArray = Array.from(webUrl);
// let newArr = [];
// newArr.push(myArray[3]);
// newArr.push(myArray[1]);

// console.log(newArr);


// getComputedStyle
// const block = document.getElementById("element");
// const element1 = document.getElementById("element1");
// const element2 = document.getElementById("element2");
// const listGroup = document.getElementById("list-group");

// console.log(window.getComputedStyle(block));
// console.log(window.getComputedStyle(element1));  
// console.log(window.getComputedStyle(element2));


// const frag = document.createDocumentFragment();

// let user = ["salom", "hello", "bye"];
// user.forEach(item => {
//     let li = createElement(item);
//     li.setAttribute("style", "color:blue;");
//     frag.appendChild(li);    
// }); 

// listGroup.appendChild(frag);


// STORAGE 
// localStorage
// let data = ["salom", "hello", 5];
// localStorage.setItem("kalit", JSON.stringify(data));

// let abc = JSON.parse(localStorage.getItem("kalit"));
// localStorage.removeItem("kalit");
// localStorage.clear();
// console.log(abc);

// sessionStorage
// let data = ["salom", "hello", 5];
// sessionStorage.setItem("kalit", JSON.stringify(data));

// let abc = JSON.parse(sessionStorage.getItem("kalit"));
// // sessionStorage.removeItem("kalit");
// // sessionStorage.clear();
// console.log(abc);

// IndexDB ma'lumotlar omborini yaratish

// // buni yaratish ozgina qiyinligi sababli Chatgptdan foydalanildi

// let request = indexedDB.open('myDatabase', 1);
// let db;

// request.onerror = function(event) {
//   console.log("Xatolik ro'y berdi:", event.target.errorCode);
// };

// request.onupgradeneeded = function(event) {
//   db = event.target.result;
//   let objectStore = db.createObjectStore("myStore", { keyPath: "id" });
// };

// request.onsuccess = function(event) {
//   db = event.target.result;
  
//   // Ma'lumot qo'shish
//   let transaction = db.transaction(["myStore"], "readwrite");
//   let objectStore = transaction.objectStore("myStore");
  
//   let data = { id: 1, name: "John", age: 30 };
//   let request = objectStore.add(data);
  
//   request.onsuccess = function(event) {
//     console.log("Ma'lumot qo'shildi.");
//   };
  
//   request.onerror = function(event) {
//     console.log("Xatolik ro'y berdi:", event.target.errorCode);
//   };
// };


// // tozalash
// // Ma'lumotlar omborini yaratish
// let request = indexedDB.open('myDatabase', 1);
// let db;

// request.onerror = function(event) {
//   console.log("Xatolik ro'y berdi:", event.target.errorCode);
// };

// request.onsuccess = function(event) {
//   db = event.target.result;
  
//   // Barcha ma'lumotlarni tozalash
//   let transaction = db.transaction(["myStore"], "readwrite");
//   let objectStore = transaction.objectStore("myStore");
  
//   let clearRequest = objectStore.clear();
  
//   clearRequest.onsuccess = function(event) {
//     console.log("Barcha ma'lumotlar muvaffaqiyatli tozalandi.");
//   };
  
//   clearRequest.onerror = function(event) {
//     console.log("Xatolik ro'y berdi:", event.target.errorCode);
//   };
// };


// COOKIE
// Cookie ga ma'lumot qo'shish
// document.cookie = "username=John Doe name; Ali";//  ; => to'xtatish
document.cookie = "username=John Doe; expires=Thu, 28 Jan 2024 21:36:00 UTC; path=/";//Ushbu kodda, "username=John Doe" qiymatini o'z ichiga olgan yangi cookie yaratiladi. "expires" qismida cookie amal qilish muddati aniqlangan. "path" qismida cookie yuritiladigan manzil ko'rsatilgan.
document.cookie = 'username' + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";//o'chirish

let cookies = document.cookie;//olish
console.log(cookies);