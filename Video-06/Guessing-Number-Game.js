const number=56;

let guess=0;

do{

    guess =   parseInt(prompt("Gusse the Number:"));

    if(guess == number){
        alert("Winner");
    break;
    }

}while(guess!=0) 

// function Hello(){
//     return ("Helloo..");
// }

// for(let i=0;i<10;i++){
//    let Ashu= Hello(); 
//    console.log(Ashu + i);
// }