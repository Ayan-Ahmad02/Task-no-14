// Sum of n Numbers?

let n = Number(prompt("Enter a number: "));

let sumN = 0;
for(let i =1 ; i<=n ; i++){
    sumN += i;
}
console.log("sum of first n :", sumN);

// Write to table of Number?

console.log("Table of ", n);

for(let i = 1; i<=10 ; i++) {
    console.log(n + " * " + i + " = " + (n*i));
}

// prime number not/yes ?

let prime = true;

if(n <= 1){
    prime = false;
}else{
    for(let i = 2; i < n; i++){
        if(n%i === 0){
            prime = true;
            break;
        }
    }
}

console.log("Is Prime Number:",prime);

// 4. Print Factors
console.log("Factors of", n);

for(let i = 1; i <= n; i++){
    if(n % i === 0){
        console.log(i);
    }
}

// Sum of digit's 

let temp1 = n;
let digitSum = 0;

while(temp1 > 0) {
    let rem = temp1 % 10;
    digitSum += rem;
    temp1 = Math.floor(temp1 / 10);
}

console.log("Sum of digits:", digitSum);

// 6. Armstrongs Numbers Check

let temp2 = n;
let armstrongSum = 0;
let digits = n.toString().length;

while(temp2 > 0){
    let rem = temp2 % 10;
    armstrongSum += rem ** digits;
    temp2 = Math.floor(temp2 / 10);
}

if(armstrongSum === n){
    console.log(n, "is an Armstrong Number");
}else{
    console.log(n, "is Not an Armstrong Number");
}