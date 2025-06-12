selectionSort=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n;i++){
        let mini=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[i]){
                mini=j;
            }
        }
        [arr[i],arr[mini]]=[arr[mini],arr[i]];
    }
    return arr;
}


const array=[64, 25, 12, 22, 11];
console.log("sorted array:",selectionSort(array))