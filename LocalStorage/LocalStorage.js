 
 const userName= document.querySelector("h1");
 const Input = document.getElementById("InputText");
const button = document.getElementById("Search");

button.addEventListener('click',()=>{
   const ValueName = Input.value;
    userName.innerHTML= "Hey, My name is :" +ValueName;
    localStorage.setItem("Name",ValueName);
    //   location.reload();
});

 window.addEventListener('load',()=>{
  const value = localStorage.getItem("Name");
 userName.innerHTML= "Hey, My name is :" +value;
    
 });