const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e =>{
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
   console.log('yhteys toimii');
    }
   };
  var data = JSON.stringify({
    "EmailMsg" : "Posti", //kirjoittaa sähköpostin sisällön
    "EmailAddress" : "severi.kerkka@edu.salpaus.fi", //viestin kirjoittajan sähköpostin
    "EmailTo" : "seve9191@gmail.com", //oma sähköposti
    "EmailName" : "Teppo Tyyppi" //nimi-kentän sisältö
  });
  xhr.send(data);
}
