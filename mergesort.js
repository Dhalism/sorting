function split(wholeArray){
  let alength = wholeArray.length
  let firstHalf =[]
  let returnArr = []
  firstHalf = wholeArray.splice(0, Math.ceil(alength/2))
  // if(firstHalf.length === 1 && wholeArray.length === 1){

  // }
  return [firstHalf, wholeArray]
}

function merge(arrOne, arrTwo){
  console.log(arrOne, arrTwo)
  let sortedArr = [];
  const tocheck = arrOne.length+arrTwo.length
  while(sortedArr.length<tocheck){
    if((typeof arrOne[0]==='undefined') || arrOne[0]>arrTwo[0]){
      console.log('if', arrOne, arrTwo)
      sortedArr.push(arrTwo[0])
      arrTwo.splice(0,1)
    }
    else{
      console.log('else' , arrOne, arrTwo)
      sortedArr.push(arrOne[0])
      arrOne.splice(0,1)
    }

  }
  console.log(sortedArr)
  return sortedArr
}

function mergeSort(array){
  let output = []
  if (array.length ===1){
    output = output.concat(array)
  }
  else{
  let arrtoMerge = split(array)
  let left  = mergeSort(arrtoMerge[0])
  let right = mergeSort(arrtoMerge[1])
  output = output.concat(merge(left,right))
  }
  return output
}
