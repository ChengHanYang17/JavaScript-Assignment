var Person ={firstName: "Cheng Han", lastName:"Yang", Age: 29, Location: "NJ", Employed: true};
console.log(Person);
//1 
let salaries = {John: 100, Ann: 160, Pete: 130}
const values = Object.values(salaries);
var sum = values.reduce((accumulator, value) =>{
    return accumulator + value;

}, 0);
console.log(sum);

//2
function multiplyNumeric(width = 200, height = 300, title = "My menu"){
    this.width = width*2;
    this.height = height*2;
    this.title = title;
}
const multiply = new multiplyNumeric();
console.log(multiply);

//3
function checkEmail(){
    let str = "bret1727@gmail.com";
    if(str.indexOf("@") == -1 || str.indexOf(".") == -1){
        return false;
    }
    else if(str.indexOf("@") > str.indexOf(".")){
        return false;
    }
    return true;
}
console.log(checkEmail());

//4
function truncate(str, maxlength){
    str ="What I'd like to tell on this topic is: ";
    maxlength = 20;
    if(str.length > maxlength){
        console.log(str.indexOf(maxlength));
    }
    else if(str.length < maxlength){
        console.log(str);
    }
}
console.log(truncate());

//5
const names =["James", "Brennie"];
console.log(names);
names.push("Robert")
console.log(names);
names[1] = "Calvin";
console.log(names);
names.shift();
console.log(names);
names.unshift("Rose", "Regal");
console.log(names);
