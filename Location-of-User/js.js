
const button = document.getElementById('location');

function gotLocation(position){
 
}

function failedToGet (){
    console.log('There was some isses in your code try to debug the code');
}

button.addEventListener(('click'),async ()=>{
// console.log(window.location.origin);

const result = navigator.geolocation.getCurrentPosition(()=>{},()=>{});           //sucess call , error call
});