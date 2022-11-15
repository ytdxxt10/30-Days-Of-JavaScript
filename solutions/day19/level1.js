function outerFuction() {
  let count = 0;
  function innerFuc() {
    count++;
    return count;
  }
  return innerFuc;
}

let closureFunc = outerFuction();
console.log(closureFunc());
console.log(closureFunc());
