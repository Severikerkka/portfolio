const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e =>{
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
   console.log('yhteys toimii');
    }
   };
   const nimi = document.querySelector('#nimi').value;
   const email = document.querySelector('#email').value;
  const viesti = document.querySelector('#viesti').value;

  var data = JSON.stringify({
    "EmailMsg" : viesti, //kirjoittaa sähköpostin sisällön
    "EmailTo" : "severi.kerkka", //oma sähköposti
    "EmailName" : nimi
  });
  xhr.send(data);
}
