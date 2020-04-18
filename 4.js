function divideAndSort(bil){
    if (typeof bil == 'number') {
        var arr = bil.toString().split(0);
  	    var divided = [];
        var newArr = [];
        for(let i = 0; i<arr.length;i++){
            let len = arr[i].length;
      	    let isiArr = arr[i];
      	    for(let j = 0; j<len;j++){
                let isinew = isiArr[j].slice(0,1);
                newArr.push(isinew);
            }
            divided.push(newArr.sort());
            newArr = [];
        }
        let result = divided.toString().split(",").join("")
        console.log(result);
    }else{
      console.log("MASUKAN HANYA ANGKA");
    }
}
divideAndSort(5956560159466056);