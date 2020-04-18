function createTri(n) { 
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(n-i);
        let str2 = '#'.repeat(i*2 -1);
   
        console.log(str + str2 + str);
    }
}
  
createTri(5);

function createpi(n){
    for(let i = 1; i <= n; i++){
        let str ='';
        for(let j = 1; j<=n-i;j++){
            str += ' ';
        }
        for(let k = 0; k != 2*i -1; k++){
            str += '*';
        }
        console.log(str);
    }
}