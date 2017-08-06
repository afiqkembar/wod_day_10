function isPrime(a){
  for(j=0;j<a.length;j++){
  var primeCheck=true;
	var arr = a[j];

  if (arr == 1){
     primeCheck=false;
     }
  for(i=2;i<=Math.sqrt(arr);i++){
    if (arr%i == 0)
      primeCheck=false;
    }
   document.write(primeCheck+"<br>");
  }
  }

isPrime([5,12,7,9]);
