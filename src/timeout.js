

/*let count = 0;

let interval = setInterval(()=>{
    count += 1;
    if(count >= 59){
        clearInterval(interval);
    }
    let DateTime = new Date();
    let time = DateTime.toLocaleTimeString();
    console.log(time);

 }, 1000);
*/

/*function counter(number){
    if(number > 0){
        setTimeout(()=>{counter(number - 1);}, 1000);
    } else {
        return;
    };
};*/

function messageWritter(){
    let message = "TIK TOK, BEYOTCH";
    let i = 0;

    if(i < message.length){
        let msg = message.charAt(i);
        i++;
        console.log(msg);
    }
}

let counter = (number) => {
    console.log(number);
    if(number > 0){
        setTimeout(()=>{counter(number - 1)}, 1000);
    } else if(number === 0){
        setTimeout(()=>{messageWritter}, 50);
    }
}

counter(5);

