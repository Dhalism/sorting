// function bubbleSort(arrayIn){
//   if(arrayIn.length<2){
//     return arrayIn
//   }
//   let toggle = arrayIn.length-1
//   let counter = 1;
//   let j = 0
// while(toggle && counter>0){
//   counter = 0
//   j++
//   console.log(j)
//   for (let i=0; i<toggle; i++){

//     if(arrayIn[i]>arrayIn[i+1]){
//       let temp = arrayIn[i]
//       arrayIn[i]=arrayIn[i+1]
//       arrayIn[i+1]=temp
//       counter++
//     }
//   }
//   toggle--;
// }
//   return arrayIn
// }
function bubbleSort(arrayIn, func){
  if(arrayIn.length<2){
    return arrayIn
  }
  let toggle = arrayIn.length-1
  let counter = 1;
  let j = 0
while(toggle && counter>0){
  counter = 0
  j++
  console.log(j)
  if(!func){
  for (let i=0; i<toggle; i++){

    if(arrayIn[i]>arrayIn[i+1]){
      let temp = arrayIn[i]
      arrayIn[i]=arrayIn[i+1]
      arrayIn[i+1]=temp
      counter++
    }
  }
}
else{

  for (let i=0; i<toggle; i++){
   switch (func(arrayIn[i], arrayIn[i+1])){
      case 1:
          let temp = arrayIn[i]
          arrayIn[i]=arrayIn[i+1]
          arrayIn[i+1]=temp
          counter++
    }
    }

}


  toggle--;
}
  return arrayIn
}
