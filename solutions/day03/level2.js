// let base = prompt("enter your base");
// let height = prompt("enter your height");

// let res = `The area of the triangle is ${0.5 * base * height}`;
// console.log(res);

// let slide_a = Number(prompt("enter slide a "));
// let slide_b = Number(prompt("enter slide b "));
// let slide_c = Number(prompt("enter slide c "));

// let perimeter = `The perimeter of the triangle is ${
//   slide_a + slide_b + slide_c
// }`;
// console.log(perimeter);

// let length = Number(prompt("enter your length"));
// let width = Number(prompt("enter your width"));
// let rectangle = length * width;
// let perimeter_rectangle = 2 * (length + width);
// console.log(rectangle, perimeter_rectangle);

//4

// let r = Number(prompt("enter your r"));
// let cirle_area = Math.PI * r * r;
// let cirle_perimeter = 2 * Math.PI * r;
// console.log(cirle_area, cirle_perimeter);

//5
// let y = 2 * x + 2;
// let y1 = 2 * 0 + 2;

// let x1 = -2 / 2;
let slope = 2;
let slope1 = (10 - 2) / (6 - 2);
console.log(slope === slope1);

//8
y = -3 * -3 - 3 * 6 + 9;
console.log(y);

//9

// let hours = prompt("enter hours:");
// let rate = prompt("enter rate per hour");
// let earning = `Your weekly earning is ${hours * rate}`;
// console.log(earning);

let name = "Terry";
let G_S = name.length > 7 ? "your name is greater" : "your name is short";
console.log(G_S);

let familyName = "Xu";
let name_res = `Your first name, ${name} is longer than your familyname, ${familyName}`;
console.log(name_res);

//12

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} older than you`);

//13
// let userAge = Number(prompt("enter birth age"));

// let nowDate = new Date();
// let nowYear = nowDate.getFullYear();
// let res_str =
//   nowYear - userAge > 18
//     ? "You are old enough to drive"
//     : " You will be allowed to drive after 3 years.";
// let res_age = `you are ${nowYear - userAge}. ${res_str}`;
// console.log(res_age);

//14
// let liveYear = Number(prompt("enter live year"));
// let live_seconds = liveYear * 3600 * 12 * 365 * 30;
// console.log(live_seconds);

//15

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate() + "";
console.log(day.length > 1);
// let Day = day.length > 1 ? day : "0" + day;
let Day = "0" + day;
console.log(Day);
let hours = now.getHours();
let minute = now.getMinutes();
let seconds = now.getSeconds();

let formate1 = `${year}-${month}-${Day} ${hours}:${minute}`;
let formate2 = `${Day}-${month}-${year} ${hours}:${minute}`;
let formate3 = `${Day}/${month}/${year} ${hours}:${minute}`;
console.log(formate1, formate2, formate3);

let formate4 = `${year}-${month}-` + Day + " " + `${hours}:${minute}`;
console.log(formate4);
