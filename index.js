// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph); 
    return cats;
    
}
function destructivelyPrependCat(bob){
    cats.unshift(bob);
    return cats;

}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;

}
function destructivelyRemoveFirstCat(){
   cats.shift();
   return cats;

}
function appendCat(Broom){
    let name1=[...cats,Broom]
    return name1;

}
function prependCat(Arnold){
    let name3=[Arnold,...cats]
    return name3;

}
 function removeLastCat(){
    let name2 =cats.slice(0,cats.length -1)
    return name2;

 }
function removeFirstCat(){
    let names =cats.slice(1)
    return names;


}
