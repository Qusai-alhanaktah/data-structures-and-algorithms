

let arrayBainarySearch = module.exports = {};

arrayBainarySearch.binarySearch = (arr, input)=>{
  let numOfIndx = 0;
  for(let i = 0; i < arr.length;i++){
    if(arr[i] === input) return numOfIndx = i;
  }
  if(!numOfIndx)return numOfIndx = -1;
};