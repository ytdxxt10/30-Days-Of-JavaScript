let mounth = prompt('enter a month:');
let resDay = mounth.charAt(0).toUpperCase() + mounth.slice(1).toLowerCase();
let res;
switch (resDay) {
  case 'January' || 'March' || 'May' || 'July' || 'Augst' || 'Octember':
    res = 31;
    break;
  case 'February':
    res = 28;
    break;
  default:
    res = 30;
    break;
}

let result = `${resDay} han ${res} days`;
console.log(result);
