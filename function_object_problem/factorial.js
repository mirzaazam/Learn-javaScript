// 5! er result er kro!


function getFectorial(n){
    let multiply = 1;
    for (let i = n; i >= 1; i-- ){
        multiply = i * multiply;
        console.log(i);
    }
    console.log('multiply : ',multiply);
}
getFectorial(5);