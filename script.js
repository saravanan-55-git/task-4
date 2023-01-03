fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    data.forEach(element => {
        const contryRequired = {
            ...element,
        name: element.name.common,
        flag: element.flags.png,
        population: element.population,
        region: element.region,
        capital: element.capital,
        subregion : element.subregion
        }
        createcountry(contryRequired)
    });

}).catch((err)=>console.log(err))

function createcountry({name,flag,population,region,capital,subregion}){
    
    document.body.innerHTML +=
    `<div class="container">
    <img src="${flag}" class="flag" />    
    <div class="info">
    <p>country name: <b>${name}</b></p>
    <p>population : ${population}</p>
    <p>region : ${region}</p>
    <p>capital : ${capital}</p>
    <p>subregion : ${subregion}</p>
    </div>
    
    </div>` 
}
