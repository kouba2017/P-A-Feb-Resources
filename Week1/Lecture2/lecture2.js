//Primitives vs Objects
// typeof()

const string1=new String("2 + 2 ");//.trim()
console.log(string1.trim());
console.log(typeof(string1));
//.valueOof to convert from obj to primitive
console.log(typeof(string1.valueOf()));
console.log(string1.valueOf());

// isPalindrome 
// input: "Elle"
//          "Rama"
// output: elle is palindrome
//        Rama is not palindrome
// function isPalindrome(ch) {
//     let palindrome = true; 
// let i =0; 
// let j=ch.length-1;
// while (i < j) {
//     if (ch[i] !== ch[j]) {
//     palindrome = false;
//     break;
//     }
//     i++;
//     j--;
// } 
// if (palindrome) {
//     // alert(`’${ch}’ est un palindrome.`);
//     console.log(`’${ch}’ est un palindrome.`);
    
//     } 
// else {
//     // alert(`’${ch}’ n'est pas un palindrome.`);
//     console.log(`’${ch}’ n'est pas un palindrome.`);
    
//     }


// }
isPalindrome("elle");
isPalindrome("rama");

function isPalindrome(str){
    var revStr=str.split("").reverse().join("");
    if(revStr==str){
        return (str+" is palindrome");
    }
    return (str+" is not palindrome");
}
console.log(isPalindrome("elle"));
console.log(isPalindrome("rama"));

// Search through 
var array=["do","re","mi,","fa","do"];
console.log(array.find((item)=>item!="do"));
console.log(array.includes("do"));
console.log(array.filter((item)=>item!="do"));

//palindrome
function palindrome(arr,n){
    let flag=true;
    for (let i = 0; i <=n/2 && n!=0; i++) {
        // const element = array[i];
        // Check if the first & last element are equals
        if(arr[i]!=arr[n-i-1]){
            flag=false;
            break;
        }
    }
    flag? console.log("["+arr+"] is palindrom"):console.log("["+arr+"] is not palindrom");
    
}
var arr1=["e","l","l","e"];
palindrome(arr1,arr1.length)








