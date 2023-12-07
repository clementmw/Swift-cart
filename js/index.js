// to find smallest integer
class SmallestIntegerFinder {
    findSmallestInt(arg){
        return Math.min(...arg)
    }
}
const finder = new SmallestIntegerFinder();
const result = finder.findSmallestInt([34, 15, 88, 2]);
console.log(result);


    
  
