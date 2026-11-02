
const ClockTimer = document.querySelector("h2");
const Button = document.querySelector("button");

  function Function (){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;                //string triplation
    console.log(time);
    ClockTimer.innerText = time;

   }    

   let interval = setInterval(()=>{
       Function();
   },1000);

   Button.addEventListener('click',()=>{
   clearInterval(interval);
   });
 
  Function ();