// console.log("Hello World");
// alert("me");
// document.write("This is the JS Tutorials");

// console.log("Hello World", 7 + 8, "Another log");
// console.warn("This is warning");
// console.error("This is error");


// JS Variable

// var num = 34;
// var num1 = 56;
// console.log(num + num1);

//  JS Datatypes

// var str = "This is string";
// var str1 = "This is string";

// // objects

// var age = { anu: 22, cp: 23, mahi: 22 }
// console.log(age);

// boolean

// var a = true;
// var b = false;
// console.log(a, b);
// var und = undefined;

// var und    this is also undefined values

// console.log(und);

// var n = null;
// console.log(n);

// var arr = [1, 2, 4, 'anu'];
// console.log(arr);


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(function(element) {
//     console.log(element);
// })

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// let arr = ["anu", "fan", "acm", 34, null, true];
// console.log(arr.toString());
// console.log(arr.sort());
// console.log(arr.shift());

// let myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());

// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// tn = document.getElementsByTagName('div')
// console.log(tn);

// createElement = document.createElement('p');
// createElement.innerText = "This is a created para";
// tn[0].appendChild(createElement)

// createElement1 = document.createElement('b');
// createElement1.innerText = "This is a created bold";
// tn[0].replaceChild(createElement1, createElement)

// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel)

// function clicked() {
//     console.log('The button was clicked');
// }

// window.onload = function clicked() {
//     console.log('The document loaded ');
// }

// Events in JS

// firstContainer.addEventListener('click', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"

// })

// firstContainer.addEventListener('click', function() {
//     console.log("Clicked on container")
// })

// firstContainer.addEventListener('mouseover', function() {
//     console.log("Mouse enter in the container")
// })

// firstContainer.addEventListener('mouseout', function() {
//     console.log("Mouse out from the container")
// })

// firstContainer.addEventListener('mouseup', function() {
//     console.log("Mouse up when clicked on  container")
// })

// firstContainer.addEventListener('mousedown', function() {
//     console.log("Mouse down on the container")
// })

// Arrow function

// summ = (a, b) => { return a + b; }

// setTimeout and setinterval

// logkro = () => { console.log("I am your log") }
// setTimeout(logkro, 2000);
// clr = setInterval(logkro, 3000)

// JS localStorage

// localStorage.setItem('name',
//     'anu')

// localStorage.getItem('name')

// JSON

// obj = { name: "anu", length: 1, a: { this: "taht" } }
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof jso)

// parsed = JSON.parse(`{"name":"anu","length":1,"a":{"this":"taht"}}`)
// console.log(parsed);