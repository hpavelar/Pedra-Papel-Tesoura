function jogar () {
    document.getElementById("campo").innerHTML = "<table border = '1'><tr><td>JOGADOR</td><td>COMPUTADOR</td></tr><tr><td><div id='div1'></td><td><div id='div2'></td></tr></table>";

    var player = Math.floor(Math.random()*3);
    if (player == 0) {
        document.getElementById("div1").innerHTML += "<img src = 'papel.jpg' width = '200px'>"
    }
    if (player == 1) {
        document.getElementById("div1").innerHTML += "<img src = 'pedra.jpg' width = '200px'>"
    }
    if (player == 2) {
        document.getElementById("div1").innerHTML += "<img src = 'tesoura.jpg' width = '200px'>"
    }

    var cpu = Math.floor(Math.random()*3);
    if (cpu == 0) {
        document.getElementById("div2").innerHTML += "<img src = 'papel.jpg' width = '200px'>"
    }
    if (cpu == 1) {
        document.getElementById("div2").innerHTML += "<img src = 'pedra.jpg' width = '200px'>"
    }
    if (cpu == 2) {
        document.getElementById("div2").innerHTML += "<img src = 'tesoura.jpg' width = '200px'>"
    }

    if (player == 0 && cpu == 0) {
        document.getElementById("campo").innerHTML += "<br /> EMPATAMOS :/"
        }
    if (player == 1 && cpu == 1) {
        document.getElementById("campo").innerHTML += "<br /> EMPATAMOS :/"
        }
    if (player == 2 && cpu == 2) {
        document.getElementById("campo").innerHTML += "<br /> EMPATAMOS :/"
        }   
    if (player == 0 && cpu == 1) {
        document.getElementById("campo").innerHTML += "<br /> VOCÊ VENCEU :/"
        } 
    if (player == 0 && cpu == 2) {
        document.getElementById("campo").innerHTML += "<br /> VOCÊ PERDEU =D"
        }

    if (player == 1 && cpu == 0) {
        document.getElementById("campo").innerHTML += "<br /> VOCÊ PERDEU =D"
        }
    if (player == 1 && cpu == 2) {
        document.getElementById("campo").innerHTML += "<br /> VOCÊ VENCEU :/"
        }

    if (player == 2 && cpu == 0) {
        document.getElementById("campo").innerHTML += "<br /> VOCÊ VENCEU :/"
        }
    if (player == 2 && cpu == 1) {
        document.getElementById("campo").innerHTML += "<br /> VOCÊ PERDEU =D"
        }

    document.getElementById("campo").innerHTML += "<button id = 'botao_jogar' onClick = 'jogar ()'>JOGAR NOVAMENTE</button>";
}