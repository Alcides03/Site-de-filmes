import categorias from '/assets/dados/categoria.json' assert {type:'json'};
import catalogo from '/assets/dados/catalogo.json' assert {type:'json'};

let dialogFilme = document.getElementById('dialogFilme');
let video = document.getElementById('video');
let lnkFecha = document.getElementById('lnkFecha');


function popularCategoria()
{
    let divMenu = document.getElementById('Categ');

    for (let idx = 0; idx < categorias.length; idx++) 
    {
        let a = document.createElement('a');
        a.className = 'link';
        a.innerText = categorias[idx].descricao;

        a.addEventListener('click', () => exibirCatalogo(categorias[idx].id));
        divMenu.appendChild(a);
    }         
}

function exibirCatalogo(categoriaId) 
{
   // alert(categoriaId);

    let filmes = catalogo.filter(filme =>{
        return filme.categoriaId == categoriaId;
    });

    let divCatalogo = document.getElementById('catalogo');
    divCatalogo.innerHTML = '';

    filmes.forEach(filme=> {

        let divCard = document.createElement('div');
        divCard.className = 'flex-catalogo-card';
        
        let imgCartazFilme = document.createElement('img');
        imgCartazFilme.className = 'cartaz-filme';
        imgCartazFilme.src = filme.imagem;

        let h4NomeFilme = document.createElement('h4');
        h4NomeFilme.innerText = filme.descricao; + '<br/>';
        h4NomeFilme.className = 'nome-filme';
        h4NomeFilme.title = filme.descricao;


        let h6AnoLancamento = document.createElement('h6');
        h6AnoLancamento.innerText = filme.anoLancamento;

        divCard.appendChild(imgCartazFilme);
        divCard.appendChild(h4NomeFilme);
        divCard.appendChild(h6AnoLancamento);

        divCard.addEventListener('click', () => exibirFilme(filme.urlVideo));

        divCatalogo.appendChild(divCard);


    });
}


function exibirFilme(urlVideo){
    video.src = urlVideo;
    dialogFilme.showModal();
}

function pararExibicaoFilme(){
    video.pause();
    video.currenTime = 0;
}

function fecharDialogFilme(){
    dialogFilme.close();
}

function inicializar(){
    dialogFilme.addEventListener('close', () => pararExibicaoFilme());
    lnkFecha.addEventListener('click', () => fecharDialogFilme());
    popularCategoria();
}

inicializar();