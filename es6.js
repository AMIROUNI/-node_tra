
// Here x is 10
//let(block scope)=t3wdh el var (allocation memoire kn fy blassa eli hjtk beh)
//const=valeur maytbdlch 
let i=28;

if(b> 10){
    let i=29;
    console.log(i)
}
console.log(i)
//29
//28

//arrow functions(les fonctions flechit)
function sum(a,b)
{
    return a+b
}
const summ=(a,b)=> a+b;
const randomSum = (a,b) => {
    a+=1;
    b+=1;
    console.log(a,b)
}

//regular expression
const firstName='Cyrine'
const lastName='Ben Hassan'
console.log(firstName + "" + lastName)
console.log(' ${firstName} ${lastName}')

//spread pattern
const user ={
    name:'ali',
    lastName,
    age:34
}
console.log({...user,jobTitle:"Developer"})
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = [...arr1,...arr2]
console.log(arr3)

//destructiong 
//object
const{name,age}=user
//array
const [c,d,e]=arr3
console.log(c,d,e) //1, 2,3,4,5,6,7,8,9,10
n


