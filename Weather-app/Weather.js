

const button = document.getElementById("SearchButton");
const input = document.getElementById("cityInput");


async function getdata(cityName){
 const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=f022b7d3d3f3499194a91048260111&q=${cityName}&aqi=yes`);

 return await promise.json()
}
button.addEventListener("click",async ()=>{
 const value =input.value;
 const result = await getdata(value);
 console.log(result);
  cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
 cityTime.innerText = result.location.localtime;
 cityTemp.innerText = result.current.temp_c +' degree Celcis';

});


//http://api.weatherapi.com/v1/current.json?key=f022b7d3d3f3499194a91048260111&q=London&aqi=yes
 