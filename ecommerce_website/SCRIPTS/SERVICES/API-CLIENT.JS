//NETWORK CALL CODE
async function doNetworkCall(){
    const url="https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json";
    
    try{

    const response = await fetch(url);
    console.log('resooponse is',response);
    const object = await response.json();
    console.log('object is',object);
    return object ;
    }
    catch(err){
        console.log('something went wrong',err);
        throw err;
    }

    // const promise= fetch(url);
    // promise.then(function(response){
    //     console.log(response);
    // })
    // .catch(function(error){
    //     console.log("Error: ",error);

    // });
   


}
export default doNetworkCall;