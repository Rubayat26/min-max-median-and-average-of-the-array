
                         //Problem 1// 


let input1 = parseFloat(prompt("enter a value"));
let input2 = parseFloat(prompt("enter a value"));
let input3 = parseFloat(prompt("enter a value"));
let input4 = parseFloat(prompt("enter a value"));
let input5 = parseFloat(prompt("enter a value"));

let b = [input1, input2, input3, input4 , input5];

console.log(b)



function numberCheck (x){
    if(!isNaN(x)){
        return true;
        //console.log(x);
    }
    
}

numberCheck(input1)
numberCheck(input2)
numberCheck(input3)
numberCheck(input4)
numberCheck(input5)

const c = b.filter(numberCheck);
console.log(c)
console.log(`maximum value ${Math.max(...c)}`)
console.log(`minimum value ${Math.min(...c)}`)


const median = arr => {
    const mid = Math.floor(arr.length / 2);    // floor records the value of 2.5 to 2, 3,9 to 3 
    const nums = [...arr].sort((a, b) => a - b); // 
    console.log(nums);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(` median value ${median(c)}`);


const sum = (a,b) => a + b;

const average = c.reduce(sum)/c.length;   

console.log(`average of the values ${average}`)



                 

