/* נאדין גברין + אור סלמן  */
// program sets an array of numbers then counts how many 0 there are 

let q5Array=[55,0,22,11,0,56,89,78,555,0,0,96634,0,0,111,0,9875,201,120];
let count=0;

//checks each cell's value and adds 1 to count if its a 0 
q5Array.forEach(function(element){ 
        count += Number(element === 0); 
      });
    console.log(count);
  