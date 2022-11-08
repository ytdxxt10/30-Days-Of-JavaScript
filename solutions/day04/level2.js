// let score = Number(prompt('enter your score'));

// let res;
// if (score >= 80 && score <= 100) {
//   res = 'A';
// } else if (score >= 70 && score <= 89) {
//   res = 'B';
// } else if (score >= 60 && score <= 69) {
//   res = 'C';
// } else if (score >= 50 && score <= 59) {
//   res = 'D';
// } else {
//   res = 'F';
// }
// console.log(res);

//2

// let month = prompt('enter your month:');
// let res;
// switch (month) {
//   case 'December' || 'January' || 'February':
//     res = 'Winter';
//     break;
//   case 'March' || 'April' || 'May':
//     res = 'Spring';
//     break;
//   case 'June' || 'July' || 'Augst':
//     res = 'Summer';
//     break;
//   case 'September' || 'October' || 'November':
//     res = 'Autumn';
//     break;
//   default:
//     break;
// }
// console.log(res);

//3

let day = prompt('enter your day:');
let upperDay = day.toUpperCase();
let res;
let resDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
if (upperDay === 'SATURDAY' || upperDay === 'SUNDAY') {
  res = `${resDay} is a weekend`;
} else {
  res = `${resDay} is a working day`;
}

console.log(res);
