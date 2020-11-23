  console.log(`alert`)



function laskutehtava(ekaNumero, tokaNumero){
return(ekaNumero + tokaNumero);}
/*Muuttujat: var let tai const*/

let ika = 43;
ika = ika + 1;

console.log(ika);

const pii =3.14;
console.log(`Piin liki arvo` + pii);

const etunimi=`Severi`; //string
const sukunimi=`Kerkkä`; //string
const syntymavuosi = 2004; //integer
const lahtelainen=true; //boolean
let maarittelematon; //undifined
console.log("syntymavuoden tyyppi: " + typeof syntymavuosi);

console.log("etunimen tyyppi: " + typeof etunimi);
//template string

console.log("Nimeni on" + etunimi + " " + sukunimi +  " ja syntymävuoteni on " + syntymavuosi);

const henkilotieto = (`Nimeni on ${etunimi} ${sukunimi}`);

console.log(henkilotieto);

console.log(`henkilotiedon pituus on: ${henkilotieto.length}`);

console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(0, 9));

console.log(henkilotieto.substring(0, 9).toUpperCase());

console.log(henkilotieto.split("")[2]);

const autoja = [`Hyndai`, `Toyota`, `volvo`,];

autoja[3]=`BMW`;

autoja.push(`Saab`);

autoja.unshift(`Mersu`);

autoja.pop();

console.log(autoja);

const opiskelija = {
  id: 1,
  etunimi: 'Severi',
    sukunimi: 'kerkkä',
  synymavuosi: '2004',
    koulutus: 'insinööri',
      osoite: {
     alue: 'kaikkialla',
      kunta: 'lahti'
      }
}
const laksyt = [
{
id:1,
tehtava: 'Ohjelmointi, HTNL',
tehty: true
},
{
id:2,
tehtava: 'Ohjelmointi, css',
tehty: true
},
{
id:3,
tehtava: 'Ohjelmointi, java',
tehty: false
}
];

for (let i=0; i <= 10; i++){
  console.log(`for loopin iteraatioluku on: ${i}`);
}

let i = 0;
while(i<=10){
  console.log(`while loopin iteraatioluku on: ${i}`);
i++;
}

for (let i=0; i <laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}
const laksyTehtava = laksyt.map(function(laksy){
  console.log(laksy.tehtava);

  return laksy.tehtava
});
  console.log(laksyTehtava);

console.log('-----------------------------------------------------------')

const tehtavaTehty = laksyt.filter(function(laksy){
return laksy.tehty === false;
}).map(function(laksy){
    return laksy.tehtava});

console.log(tehtavaTehty);

const numero = 20;
const nimi = 'Jorma';

if(numero < 18 || nimi === 'Jorma'){
  console.log('access denied or you are Jorma');
  }else if(numero === 18){
    console.log ('access granted');
  }
/*else{
  console.log('access granted');
}*/

const access = numero > 18 ? 'granted' : 'denied';

console.log(access);

console.log(laskutehtava(1, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const kurssinOsat = document.querySelectorAll('.sisalto');

kurssinOsat.forEach((osa)=>console.log(osa));

const ul = document.querySelector('.kurssi');
const kurssinappi = document.querySelector('.kurssinappi');
const nimisisalto = document.querySelector('#nimi');
const asiasisalto = document.querySelector('#tieto');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');

kurssinappi.addEventListener('click', e =>{
e.preventDefault();

if(nimisisalto.value === '' || asiasisalto === '' ){
 virhe.classList.add('virhe'); 
  virhe.innerHTML= 'Täytä kaikki kentät';
  kurssinappi.style.background = 'red';
  kurssinappi.value= 'virhe!';
 setTimeout(() => virhe.classList.remove('virhe'), 3000);
  setTimeout(() => virhe.innerHTML=(''), 3000);
  setTimeout(() => kurssinappi.style.background = "blue", 3000);
  setTimeout(() => kurssinappi.value = 'lisää tietoa', 3000)

  }else{

  const li = document.createElement('li');

  li.appendChild(document.createTextNode(`${nimisisalto.value}: ${asiasisalto.value}`));

  viesti.appendChild(li);

  nimisisalto.value= '';
  asiasisalto.value= '';
}
});

const merkitseValmiit = document.querySelector('.merkinta');
console.log(merkitseValmiit);
merkitseValmiit.addEventListener('click', e =>{

  e.preventDefault();

    if(document.querySelector('#tehta').checked){
    ul.children[0].innerHTML = '<input type="checkbox" id ="tehta" checked>HTML tunnit pidetty';
    }else{
ul.children[0].innerHTML = '<input type="checkbox" id ="tehta" >HTML';    
    }
    
    if(document.querySelector('#tehtb').checked){
    ul.children[1].innerHTML = '<input type="checkbox" id ="tehtb" >css ';
    }else{

    }

    if(document.querySelector('#tehtc').checked){
    ul.children[2].innerHTML = '<input type="checkbox" id ="tehtc" >javascript';   
    }else{

    }

    if(document.querySelector('#tehtd').checked){ ul.children[3].innerHTML = '<input type="checkbox" id ="tehtd" >ci/cd';  
  }else{

  }

});

