

async function  getData() {

    const resultFromServer = await(fetch(  "https://jsonplaceholder.typicode.com/posts")).then(()=>{
        const print =await(resultFromServer);
   console.log(print);
    }).catch((error)=>{
         console.log(error);  // printing the error messages in a clean formate.
    }).finally(()=>{
    console.log("By default always run ...")
    });

    console.log(resultFromServer.json());
}


getData();