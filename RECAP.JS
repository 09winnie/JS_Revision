// escaping literal quotes strings 
var mySt="I am  a \"double-quote\" inside a string with \"double-quotes\""
console.log(mySt);

// escape strings
var str="FirstName\n\t\\secondName\nthirdLine"
console.log(str);

// concatenating strings
var a="Dante is a computer science student. "
 a+="Winky is a Software engineering student."
 console.log(a);

 var strg="Are you okay? " + "Has she come to visit you?"
 console.log(strg);

 var name="Tamar Graphics Hub"
 var intro="Hello this is the  " + name  + " .Thanks for calling us, " + "How can we help you?"
 console.log(intro);

// appending variables to strings
var d="is a beautiful thing."
var c="Love "
c+=d;
console.log(c)

// length of a string
intro=intro.length
console.log(intro);
 
// character in a string,,0-based indexing
var x="How is the maldives? Are you enjoying your vacation?"
z=x[7]
console.log(z);

// finding the last xter in a string
q=x[x.length -1]
console.log(q);

// word blanks

function wordBlank(noun,adjective,verb,adverb){
var result="";
result+="I will buy a " + " " + noun + " " + adjective+ " " +  verb +" " + adverb 

return result;
}
console.log(wordBlank("beautiful","blue","Subaru","Outback"));

// nested arrays
 var myArr=[["Bee","Winky","Ailsa","Mel"],[24,23,5,3]]

//  changing elements in an array
 var anArr=[12,13,14,15,16]
anArr[3]=17
console.log(anArr);

// accessing an array within an array
 var ourArr= [[1,2,3],[4,5,6],[7,8,9],10,11,12];
 var x=ourArr[0][1];
 var w=ourArr[1][2];
 var y=ourArr[2][0];
 var z=ourArr[4]
console.log(x);
console.log(w);
console.log(y);
console.log(z);

// adding an array to an array
var c=["Bee","Mel","Ailsa","Winky"]
c.push(["Reen","Dylan","Shaz","Sophie","Cate","Bree"])
console.log(c)

// removing last  element  from an array
var s=["Reen","Dylan","Shaz","Sophie","Cate","Bree","Maggie"]
s.pop()
console.log(s);

// removing the first element from the array
s.shift();
console.log(s);

// adding an element to the beginning of an array
s.unshift("Mitch")
console.log(s);

// shopping list
var myList=[["bananas",6],["oranges",5],["peas",10],["pineapples",3],["apples",6],["avocadoes",3]]
console.log(myList[2])
console.log(myList[2][0])

// global scopes and functions
var myGlobal=10;
function fun1(){
oopsGlobal=5;
}
function fun2(){
    var output="";
    if(typeof myGlobal !="undefined"){
        output+="myGlobal:" + myGlobal;
    }
    if(typeof oopsGlobal !="undefined"){
        output+="oopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// local scopes
function myScope(){
    var myVar="I am a local scope"
    console.log(myVar);
}
myScope();

var outer="My name is Candy and i am the brains behind the Candy X_perience";
function inner (){
return outer;
}
console.log(inner());

//returning values from a function
function inners(num){
var me="I have"+" " + num +" " +"niccurs"
return me;
}
console.log(inners(12));

// getting keys/values in objects
 var student={
     name:"Melan Dante",
     age:3,
     Nationality:"Kenyan",
    
 }
 var nameValue=student["Nationality"];
 var ageValue=student['age'];
console.log(nameValue);
console.log(ageValue);

// updating object properties
student.name="Jackie Melannie"
student["Talents"]=["singing","dancing","poetry"]
console.log(student.name);
console.log(student["Talents"]);

// deleting a property from an object.
delete student.age;
console.log(student)

// objects inside arrays
var artists=[{"name":"Guardian Angel",
"song":"Rada",
"Genre":"Gospel"
},
"Guc Ministries",
"Yemi Yalade",
{
    "name":"Joel Lwaga",
    "song":"Sitabaki kama nilivyo",
    "Genre":"Gospel"
},
"Davido",
[10,20,30,40,50]
]
console.log(artists[0]);
console.log(artists[5][4]);
console.log(artists[1]);
console.log(artists[3])
artists.push(["Timi Dakolo","Rayvanny",{"name":"Mboso","Song":"Baikoko","Genre":"Bongo","Year of Release":2021}])
console.log(artists);
artists.unshift("Mariah Carey")
console.log(artists);
delete artists[5];
console.log(artists);

// accessing nested objects
var artist={
    "name":"Guardian Angel",
    "car":{
        "colour":"Silver",
        "favCar": {
    
            "name":"Subaru",
            "model":"Outback",
            "color":"Silver",
        },
    },
    "Songs":["Rada","Hadithi","Usinipite"],
    "Genre":"Gospel",
}
var favorite=artist.car.favCar["model"];
console.log(favorite);
var fav1=artist.car.favCar["name"];
console.log(fav1);

// accessing nested arrays
var myPlants=[{
    "type":"flowers",
    list:["rose","tulip","dandelion"]
},
{
    "type":"trees",
    list:["fir","pine","eucalyptus"]
},];

var tree=myPlants[1].list[2];
console.log(tree);

// iterate with while loops
var myArray=[];
var a=0;
while(a<10){
    myArray.push(a);
    a++;
}
console.log(myArray);

// iterate with for loop
var meArr=[];
for(var i=1;i<=7;i++){
    meArr.push(i);
}
console.log(meArr);

// getting odd/new numbers from an array
// odd numbers
var meArr=[];
for(var i=1;i<=50;i+=2){
    meArr.push(i);
}
console.log(meArr);
// even
var meArr=[];
for(var i=0;i<=50;i+=2){
    meArr.push(i);
}
console.log(meArr);
// counting backwards with a for loop
var array=[];
for(var i=20;i>0;i-=2){
    array.push(i);
}
console.log(array);

var myArray=[];
for(var i=29;i>1;i-=2){
    myArray.push(i);
}
console.log(myArray);

// iterating through an array with for loop
var numArr=[10,20,30,40,50,60];
numTotal=0;
for (var i=0;i<numArr.length;i++){
    numTotal+=numArr[i]
}
console.log(numTotal);

function product(arr){
    var multiply=1;
    for (var i=1;i<arr.length;i++){
     multiply*=arr.length;
    } 
    return multiply;
}
var multiply=product([2,4,6,8,10,12]);
console.log(multiply);

// operations in a nested function
var numArr=[[10,20,30,],[40,50,60],[70,80,90]];
numsTotal=0;
for (var i=0;i<numArr.length;i++){
 for (var j=0;j<numArr[i].length;j++){
    numsTotal+=numArr[i][j];
 }
}
console.log(numsTotal);

// do while loop
var myArray=[];
var a=0;
do{
    myArray.push(a);
    a++;
}  
while(a<10)
console.log(a,myArray);

// generating random numbers
function random(){
    return Math.random();

}
console.log(random());

function randomNumbers(){
    // var randomNumbers=math.floor(random()*30);
    return Math.floor(random()* 20);

}
console.log(randomNumbers());

// parseInt function
function convert(strings){
    return parseInt(strings);
}
console.log(convert("100"));

// ternary operator
function tOperator(a,b){
    return a===b ?true :false
}
console.log(tOperator(100,"100"));

// nested ternary operators
function tOperator(a,b){
    return a>b ?"pass" : b>70 ? "You can do better" :"fail"
}
console.log(tOperator(40,50));
console.log(tOperator(80,50));


// destructuring objects in a constant variable
const vowel={a:1,b:2,c:4,d:5}
var a=vowel.a;
var b=vowel.b;
var c=vowel.c;
var d=vowel.d;
const u={x:a,y:b,w:c,z:d}
console.log(u);
