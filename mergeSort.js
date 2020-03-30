// Takes in an array and recursively merge sorts it
const mergeSort = (array, p, r) => {
    if (p < r) {
    var q = Math.floor((p + r)/2);
    mergeSort(array, p, q);
    mergeSort(array, q+1, r);
    merge(array, p, q, r);
    }
  };
  
  // Takes in an array that has two sorted subarrays,
  //  from [p..q] and [q+1..r], and merges the array
  const merge = (array, p, q, r) => {
    const lowHalf=[];
    const highHalf=[];
    let k=p;
    let i,j;
    for(i=0;k<=q;i++,k++){
      lowHalf[i]=array[k];
    }
    for(j=0;k<=r;j++,k++){
      highHalf[j]=array[k];
    }
    k=p;
    for(j=i=0;i<lowHalf.length && j<highHalf.length;){
      if(lowHalf[i]<highHalf[j]){
        array[k]=lowHalf[i];i++;
      } else {
        array[k]=highHalf[j]; j++;
      }
      k++; 
    }
    for(;i<lowHalf.length;){
      array[k]=lowHalf[i];
      i++;
      k++;
      }
    for(;j<highHalf.length;){
      array[k]=highHalf[j];
      j++;k++;
    }
  };
  
  const array = [14, 7, 3, 12, 9, 11, 6, 2];
  mergeSort(array, 0, array.length-1);
  console.log("Array after sorting: " + array);
  //Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);