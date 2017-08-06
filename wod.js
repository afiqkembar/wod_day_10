function isPrime(a){
  var primeCheck=true;
  for(i=2;i<Math.sqrt(a);i++){
    if (a%i == 0)
     primeCheck = false;

  }
    document.write(primeCheck);
  };

isPrime(33);
