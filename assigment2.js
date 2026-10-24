/* נאדין גברין + אור סלמן  */

//Assigment2 : write a that program prints all the  prime numbers there are up till 237

//function checks if a number is prime (divisibkle onky by 1 and itself)
function isPrime(x){
  for(let i=2; i<x; i++){
    if(x%i==0){
      return false;
    }
  }
  return true;
}


//prints all the prime numbers from 2 to 237
for (let i=2; i<=237; i++){
  if(isPrime(i)){
    console.log(i);
  }
}