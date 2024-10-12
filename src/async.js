

/*setTimeout(() => {
    printHello('Hello and hi.');
}, 4000);



function printHello(value){
    console.log(value);
} */


let myPromise = new Promise(function(resolve, reject){

    let x = 59;

    if(x === 60){
        resolve('It matched!');
    } else if(x <= 60){
        reject('add more number sur!');
    }
});

myPromise.then(
    function(value) {
        console.log(value);
    },
    function(error){
        console.log(error);
    }
)


// async await function 

let promise = new Promise(function(resolve, reject){
    setTimeout(function (){
        resolve('Give me your Bio')}, 3000);
});

async function myAsyncFunction(){
    let result = await promise;
    console.log(result);
    setTimeout(biographic, 3000);
    setTimeout(() => {
        console.log("Done sir!");
    }, 4000);
}

myAsyncFunction();

let message1 = "Mandie";
let message2 = 18;
let message3 = "Male";

async function biographic(){
    let result1 = await message1;
    let result2 = await message2;
    let result3 = await message3;

    console.log(result1);
    console.log(result2);
    console.log(result3);
}

//ERROR HANDLING

let anotherPromise = new Promise(function(resolve, rejec){
    setTimeout(()=> {
        resolve(`\n\nHowdy ${message1}`);
    }, 6000);
});
// try and catch error
async function anotherAsync(){
    try{
        let response = await anotherPromise;
        console.log(response);
    } catch(error){
        console.log(`Error: ${error}`)
    }
}
anotherAsync();
/* prints every 1 seconds
setInterval(anotherAsync, 1000);
*/