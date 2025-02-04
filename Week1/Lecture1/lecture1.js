var x="fdkjf";
var x=45;
// do {
//     actioon
// } while (condition is not reached );
// while (condition) {
//     action
// };
//Anonymous
const sq= function(n){
    // console.log(n);
    return  n*n;
}
console.log(sq(4));

//With expression name
const factorial =function fac(n){
    return n*fac(n);
}





//Exercice: 
// Input: n=4
//Output: 0-1-2-3

// Loops
// do {
//     actioon
// } while (condition is not reached );

// while (condition) {
//     action
// };

// function generateSequence(input) { 
//     let result = ""; 
//     for (let i = 0; i < input; i++) { 
//         result += i; 
//         if (i < input - 1) {  
//             result += "-"; }
//     } 
//     return result; }
// console.log(generateSequence(4));
// for (let i = 0; i < n ; i++)
//     {
//       if (i == n - 1)
//            console.log(`${i}`)
//       else
//            console.log(`${i} -`)
//     }
let n=0;
// diff btw let & var
// while(n<5){
//     // console.log(n,end="-");
//     process.stdout.write(n+"-");
//     n++;
    
// }
//anonymous
const incrementation= function (limit){
    n=0;
    do {
        //teranry operator
        (n==(limit-1))?console.log(n+""):process.stdout.write(n+"-");
        n++;
    } while (n<limit);
}
incrementation(6);



