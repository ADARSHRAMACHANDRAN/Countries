function fetchCountry(){
    let countryName=cntry_name.value

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(response=>response.json()).then(country=>populateValues(country))
}
function populateValues(country){
    let country_data=''
    let country_name=country[0].name
    let flag=country[0].flag
    let population=country[0].population
    let currency=country[0].currencies[0].name
    let currency_symbol=country[0].currencies[0].symbol
    let language=country[0].languages[0].name
    let capital=country[0].capital
    country_data=`
    <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country_name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Capital : ${capital}</li>
    <li class="list-group-item">Language : ${language}</li>
    <li class="list-group-item">Population : ${population}</li>
    <li class="list-group-item">Currency : ${currency}</li>
    <li class="list-group-item">Currenct Name : ${currency_symbol}</li>
  </ul>
</div>`
document.querySelector("#result").innerHTML=country_data

}

var select=document.querySelector('#select')
fetch(`https://restcountries.com/v2/all`).then(res=>res.json()).then(countries=> fetchname(countries))

function fetchname(countries){
for(let data of countries){
  console.log(data.name);

      let option=document.createElement('option')
      option.text=data.name
      option.value=data.name
      select.append(option)
      
  }
}
function selectCountry(){
  let cntryname=document.querySelector("#select").value
  fetch(`https://restcountries.com/v2/name/${cntryname}?fullText=true`).then(res=>res.json()).then(cntry=>populateValues(cntry))
}
