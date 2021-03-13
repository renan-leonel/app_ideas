var minutes = 25;
var seconds = 0;
var flag = false;

function load(){
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function enableButton(){ // permitir que o botão terminar possa ser clicado
    document.getElementById("finish").disabled = false;
}

function finish(){
    flag = true;
}
    

function start(){

    enableButton();

    var interval = setInterval(() => {
        if(flag == false){
            if(seconds == 0){
                if(minutes == 0){
                    clearInterval(interval); // acabou o contador 00:00
                }
                else{
                    minutes = minutes - 1;
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    document.getElementById("minutes").innerHTML = minutes;
                    seconds = 59;
                    document.getElementById("seconds").innerHTML = seconds;
                }
            }
            else{
                seconds = seconds - 1;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                document.getElementById("seconds").innerHTML = seconds;
            }
        }
        else{
            clearInterval(interval); // botão terminar foi acionado, setando o contador pra 00:00
            document.getElementById("seconds").innerHTML = 0;
            document.getElementById("minutes").innerHTML = 0;
        }
    }, 1000); 
}

function increaseOne(){
    minutes = minutes + 1;
    document.getElementById("minutes").innerHTML = minutes;
}

function decreaseOne(){
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
}

function increaseFive(){
    minutes = minutes + 5;
    document.getElementById("minutes").innerHTML = minutes;
}

function decreaseFive(){
    minutes = minutes - 5;
    document.getElementById("minutes").innerHTML = minutes;
}