var minutes = 0;
var seconds = 3;
var flag = false;

function load(){
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function enableButton(){ // permitir que o botão terminar possa ser clicado
    document.getElementById("pause").disabled = false;
}

function pause(){
    flag = true;
}
    
function countdown(){
    var interval = setInterval(() => {
        if(flag == false){
            if(seconds == 0){
                if(minutes == 0){
                    clearInterval(interval); // acabou o contador 00:00
                    restButton = document.getElementById("rest");
                    restButton.style.display = "block";
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
            clearInterval(interval); // botão pause foi acionado, setando o contador pro momento do pause
            document.getElementById("seconds").innerHTML = seconds;
            document.getElementById("minutes").innerHTML = minutes;
        }
    }, 1000); 
}

function start(){
    if(flag == true){
        flag = false;
    }
    enableButton();
    countdown();
}

function resume(){
    if(flag == true){
        flag = false;
    }

    countdown();    
}

function reset(){
    pause();
    document.getElementById("minutes").innerHTML = 25;
    document.getElementById("seconds").innerHTML = '0' + 0;
}

function rest(){

    document.getElementById("minutes").innerHTML = '0' + 5;
    document.getElementById("seconds").innerHTML = '0' + 0;

    var restInterval = setInterval(() => {
        if(seconds == 0){
            if(minutes == 0){
                clearInterval(restInterval); // acabou o contador 00:00
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
    }, 1000);
}

