var getJSON = function(url, callback){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  
  xhr.onload = function() {

    var status = xhr.status;
    if (status == 200){
      callback(null, xhr.response);
    }else {
        callback(status);
    }
};

  xhr.send();
};

/*getJSON
('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data){

  if (err != null){
      console.error(err);
  }else{
    console.log(`${data.infected}`);  
    console.log(`${data.tested}`);
    console.log(`${data.deaths}`); 

   document.querySelector(".korona").innerHTML=`tartuntojen määrä:${data.infected} <br> testattujen määrä:${data.tested} <br> kuolleiden määrä:${data.deaths} `;
});*/
getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data) {
 
  let taulukko = `<table width "100%" style="border:1px solid black">`;

  const historia = data.map(function(paiva){

    if(paiva.confirmedCases != undefined){
      taulukko = taulukko + `<tr><td>${paiva.lastUpdatedAtApify.split("T")}</tr></td>
       </td><td>Tartunnat</td><td>${paiva.confirmedCases}</td></tr>`;


    }
    else if (paiva.testedCases != undefined){
      taulukko = taulukko + `<tr><td>${paiva.lastUpdatedAtApify}
      </td><td>Tartunnat</td><td>${paiva.testedCases}</td></tr>`;
    }
    else if (paiva.infected != undefined){
    taulukko = taulukko + `<tr><td>Tartunnat</td><td>${paiva.infected}</td></tr>`;  
    }
    else{
      console.log(`ei dataa`);
    }
  });
  taulukko = taulukko + `</table>`;
    document.body.innerHTML = taulukko;

  
});
