function outerFuction() {
  let count = 0;
  function innerFuc() {
    count++;
    return count;
  }
  function innerPlus() {
    count--;
    return count;
  }

  function innerOther() {
    count = (count + 2) ** 2;
    return count;
  }
  return { add: innerFuc(), plus: innerPlus(), other: innerOther() };
}

let closureFunc = outerFuction();
console.log(closureFunc.add);
console.log(closureFunc.other);
