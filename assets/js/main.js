// const name=prompt("adinizi daxil edin");
// const surname=prompt("soyadinizi daxil edin");
// const dateNow=prompt("indiki il");
// const year=prompt("dogum tarixinizi daxil edin")

// class Person{
//     constructor(name, surname,dateNow,age){
//         this.name=name;
//         this.surname=surname;
//         this.dateNow=dateNow;
//         this.year=year;
//     }
// fullName(){
//     return`Adi ${this.name}- Soyadi ${this.surname}`;    
// }
// Personage(){
//     return`Yasi var${this.dateNow-this.year}`;
// }
// fullinformation(){
// console.log(this.fullName()+" "+this.Personage());
// }
// }
// const names = new Person (name,surname,dateNow,year);
// names.fullinformation();




// const marka=prompt("marka daxil edin");
// const model=prompt("modeli daxil edin");
// const year=prompt("buraxilis ilini qeyd edin");
// class Car{
// constructor(marka,model, year,tank,speet,kilometr,litr,){
// this.marka=marka;
// this.model=model;
// this.year=year;
// this.tank=tank;
// this.speet=speet;
// this.kilometr=kilometr; 
// this.litr=litr;
// }
// carMarka(){
//     return`${this.marka} ${this.model} buraxilis ili ${this.year}ci il 65 litr ceni yanacaq tutur. maksimal sureti 240km/saatdir`;
// }
// consumption(){
//     return` 970 kilometre ${this.litr*this.kilometr/100} litr yanacaq serf edir`;  
// }
// distance(){
//     return`dolu cen ile ${this.tank*100/this.litr} kilometr yol qet edir`;
// }
// carInformation(){
//     console.log(this.carMarka() +" "+this.consumption()+" "+this.distance());
// }
// }
// const Cars=new Car(marka,model,year,65,240,970,8 ) 
// Cars.carInformation();



//New Homwork tasks start 

// task-2
const data =[
    {name:"Farid",age:27,salery:3000},
    {name:"Cavid", age:24, salery:5000},
    {name:"Aqshin", age:27, salery:9000},
    {name:"Elman", age:32, salery:15000},
]
const result=data.reduce(sumNums,0)
function sumNums(salery,value){   
return salery+value.salery; 
}
console.log(result);


// task-3
const name=prompt("adinizi daxil edin");
const parol=prompt("parolunuzu daxil edin");

const username="Aqshin";
const password="0506869944";

if(name===username){
alert("daxil ol");
}
else{
    alert("yalnis parol");
}

// task-4
const month=13
switch (month) {
    case 1:
        console.log("Yanvar-qış");
        break;
    case 2:
        console.log("Fevral-qış");
        break;
    case 3:
        console.log("Mart-yaz");
        break;
    case 4:
        console.log("Aprel-yaz");
        break;
    case 5:
        console.log("May-yaz");
        break;
    case 6:
        console.log("Iyun-yay");
        break;
    case 7:
        console.log("Iyul-yay");
        break;
    case 8:
        console.log("Avqust-yay");
        break;
    case 9:
        console.log("Sentyabr-payız");
        break;
    case 10:
        console.log("Oktyabr-payız");
        break;
    case 11:
        console.log("Noyabr-payız");
        break;
    case 12:
        console.log("Dekabr-qış");
        break;
    default: alert("il 12 aydan ibarətdir")

}


// New Homwork tasks end