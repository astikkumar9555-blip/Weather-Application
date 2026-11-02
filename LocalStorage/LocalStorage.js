 
 const userName= document.querySelector("h1");
 const Input = document.getElementById("InputText");
const button = document.getElementById("Search");

button.addEventListener('click',()=>{
   const ValueName = Input.value;
    userName.innerHTML= "Hey, My name is :" +ValueName;
    localStorage.setItem("Name",ValueName);
});

 window.addEventListener('load',()=>{
  const value = localStorage.getItem("Name");
  console.log(value);
   userName.innerHTML= "Hey, My name is :" + value;
 });