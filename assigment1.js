/* נאדין גברין + אור סלמן  */

//program sets a number, Prints how many of the numbers 2, 3, 5 divide the given number

let num = 120;
//checking if the number is divisible by 2, by 3 and by 5 and convert the boolean to a number( 1 tru and 0 false)
let div1=(Number(num%2===0));
let div2=(Number(num%3===0));
let div3=(Number(num%5===0));

// The sum is an indication of how many of 2/3/5 divide num 
console.log(div1 + div2 + div3);