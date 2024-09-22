//Array methods

// filters

let numbers =[10,20,11,4,5,18,55,26];
// let evenNumbers=[];

// numbers.forEach((num)=>{
//     if(num%2===0)
//        evenNumbers.push(num)
// })

// evenNumbers = numbers.filter(num=>num%2===0);

// console.log(evenNumbers);

let students=["devan","shitish","ashask","nishamut","anitrudha","andy","AKKAS"]
// let studentswithA = students.filter(student=>student.toLowerCase().startsWith("a"))
// console.log(studentswithA);


let otts = [
    {
        id:10,
        name  : "Hotstar",
        price : 1500,
        subscription : true
    },
    {
        id:12,
        name  : "Prime",
        price : 1000,
        subscription : true
    },
    {
        id:103,
        name  : "Zee5",
        price : 700,
        subscription : false
    },
    {
        id:25,
        name  : "Jio Cinema",
        price : 250,
        subscription : false
    },
    {
        id:77,
        name  : "Netflix",
        price : 200,
        subscription : true
    }
];

// let activeSubs = otts.filter(ott=>ott.subscription)
// console.log(activeSubs);

// let priceLessEaualThousand = otts.filter(ott=>ott.price<=1000)
// console.log(priceLessEaualThousand);

// 2.map

// console.log(numbers);
// console.log(
//     numbers.map(num=>num*2)
// );

// console.log(
//         numbers.map(num => num % 2 === 0 ? num + 1 : num)
// )

// console.log(
//     students.map(student=>student.toUpperCase())
// );

// console.log(
//     otts.map(ott=>{
//         let tempPrice = ott.price>=1000?ott.price-(ott.price*0.2):ott.price;
//         return {
//             name:ott.name,
//             price:tempPrice,
//             subscription: ott.subscription,
//         }
// }
// ))


// 2.Reduce

// console.log(numbers.reduce((result,val)=>{
//     console.log(result,val);

//     return result+val
// },0));

// console.log(
//     otts.reduce((result,value)=>
//         value.subscription?++result:result
//     ,0)
// );

// console.log(
//     otts.reduce((res,value)=> res+value.price,0)
// );

// find

// console.log(
//     numbers.find(num=>num>15)
// );

// const findOtt = function(otts,id){
//    return otts.find(ott=>ott.id===id)
// }

// console.log(
//     findOtt(otts,77)
// );

// Sort

// console.log(
//     students.sort().reverse()
// );

// console.log(
//     numbers.sort((n1,n2)=>n1-n2).reverse()
// );

// console.log(
//     otts.sort((o1,o2)=>o1.price-o2.price)
// );


// console.log(
//     otts.sort((o1,o2)=>o1.name.localeCompare(o2.name))
// );


// date

const now = new Date();
console.log(now);
console.log(now.getTime());
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())


const twoDaysAgoTimestamp = now.getTime()- (2*24*60*60*1000)
const twoDaysAgo = new Date(twoDaysAgoTimestamp);
console.log(twoDaysAgo)