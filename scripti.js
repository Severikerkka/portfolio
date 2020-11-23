const nimi=`Severi Kerkkä`; 
const ikä=`16`; 
const opiskelija=true; 

if(opiskelija === true){
  console.log('olen opiskelija');
  }else if(numero === 18){
    console.log ('olen ammattilainen');
  }
console.log("Hei sivullani surffaaja, nimeni on" + nimi + " " + " ja ikäni on " + ikä);

var k1 = 'Niko Maklin'
var k2 = 'Janne jantti'
var k3 = 'Joonas Halttu'
var k4 = 'Samu Ojala'
console.log(k1.split(" ")[0]);
console.log(k2.split(" ")[0]);
console.log(k3.split(" ")[0]);
console.log(k4.split(" ")[0]);



const perhe = [ 
    {name: "Severi", ika: "16", taysiikainen:false}, 
    {name: "Antti", ika: "19", taysiikainen:true}, 
    {name: "Julius", ika: "7", taysiikainen:false}, 
    {name: "Karita", ika: "44", taysiikainen:true}, 
    {name: "Teppo", ika: "54", taysiikainen:true} 
]; 
const perheaik = perhe.filter(function(family){
return family.taysiikainen === false;
}).map(function(family){
    return family.name});

console.log(perheaik);

const perhelaps = perhe.filter(function(family){
return family.taysiikainen === true;
}).map(function(family){
    return family.name});

console.log(perhelaps);






console.log(16 + 19 +7 +44 +54);