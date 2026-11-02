
const button = document.getElementById('location');

async function getdata(lat ,long){
 const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=f022b7d3d3f3499194a91048260111&q=${lat},${long}&aqi=yes`);

 return await promise.json()
}

async function gotLocation(position){
 const result = await getdata(position.coords.latitude ,
     position.coords.longitude);
     console.log(result);
}

function failedToGet (){
    console.log('There was some isses in your code try to debug the code');
}

button.addEventListener(('click'),async ()=>{
// console.log(window.location.origin);

const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);           //sucess call Back , error call back
});