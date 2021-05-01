function getData() {
    const capsulas = new XMLHttpRequest();
    capsulas.open("GET", "https://entregavel.polijrinternal.com/produtos/");
    capsulas.responseType = "json";
    capsulas.onload = function() {

        var fotos = document.getElementsByClassName("foto");
        var nomes = document.getElementsByClassName("nome");
        var intensidades = document.getElementsByClassName("intensidade");
        var descricoes = document.getElementsByClassName("descricao");
        var precos = document.getElementsByClassName("preco");
        

        console.log(capsulas.response);

        for(i = 0; i <= 5; i++){

            
            nomes[i].innerHTML = capsulas.response[i].nome;
            intensidades[i].innerHTML = capsulas.response[i].intensidade;
            descricoes[i].innerHTML = capsulas.response[i].descricao;
            precos[i].innerHTML = capsulas.response[i].preco;
            fotos[i].src= capsulas.response[i].foto;


        }
        //document.getElementById("putHere").innerHTML = capsulas.response[0].nome;
        
         
    }
    capsulas.send();
}

getData();