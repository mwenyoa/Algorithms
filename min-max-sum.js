function miniMaxSum(arr) {
    // Write your code here
    let sortedArr = arr.sort();
    let min_sum  = 0;
    let max_sum = 0;
    for(let x = 0; x < sortedArr.length; x++){
      if(x < sortedArr.length -1){
          min_sum += sortedArr[x];
      }
       if(x > 0){
          max_sum += sortedArr[x];
      }
    }
    return console.log(min_sum, max_sum);
}