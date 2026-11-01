

 //I am creating a function having n Numbers of the parameters .
 // for that one important concept is that In the concept of function all the parameters stores in the ARGUMENT .


 function Add(){

    let ans=0;

    for (let i=0;i<arguments.length;i++){
        ans =ans+arguments[i];
    }
    return ans;
 }

 let result=Add(12,25,36,94,35,87,32,54);

 console.log(result);


 // Using the SPREAD Operatores..

 function AddNumbers(...numbers){
    let ans =0;
    for (let i=0;i<numbers.length;i++){
        ans += numbers[i];

    }
  return ans;
 }

 let final =AddNumbers(15,28);
 console.log(final);
