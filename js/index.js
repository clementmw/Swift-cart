// to find smallest integer
// class SmallestIntegerFinder {
//     findSmallestInt(arg){
//         return Math.min(...arg)
//     }
// }
// const finder = new SmallestIntegerFinder();
// const result = finder.findSmallestInt([34, 15, 88, 2]);
// console.log(result);

// function getGrade(s1, s2, s3) {
//     let score = (s1 + s2 + s3) / 3;
//     switch (true) {
//         case score >= 90:
//             return "A";
//         case score >= 80:
//             return "B";
//         case score >= 70:
//             return "C";
//         case score >= 60:
//             return "D";
//         default:
//             return "F";
//     }
// }

// console.log(getGrade(5, 10, 9));

// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }
    
  //to calculate sum of positive integers

  function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.max(0, arr[i]); 
    }
    return sum;
}

let arr = [1, -2, 2];
console.log(positiveSum(arr)); 




