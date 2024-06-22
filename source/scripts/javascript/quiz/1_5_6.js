function respostaEscolhida(id){
    var noclass = document.querySelectorAll(".respostas p")
    noclass.forEach(function(p) {
        p.style.color = "black";
    });
    var noid = document.getElementById(id)
    noid.style.color = "blue"
}
