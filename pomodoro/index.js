var minutes = 1;
var seconds = 59;

function load(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){

    var min_interval = setInterval(minutesCountdown, 60000); // executa a função minutesCountdown() a cada 60 segundos
    var sec_interval = setInterval(secondsCountdown, 1000); // executa a função secondsCountdown() a cada 1 segundos
    
    function minutesCountdown(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsCountdown(){       
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;
        
        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(min_interval); // para a execução da linha 13
                clearInterval(sec_interval); // para a execução da linha 14
                console.log("terminou");
            }
            seconds = 60;
        }
    }
}

// function finish(){

//     minutes = 0;
//     document.getElementById("minutes").innerHTML = minutes;
//     seconds = 0;
//     document.getElementById("seconds").innerHTML = seconds;
// }
    



