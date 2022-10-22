'use strict'

const itensHeader = document.querySelectorAll('.menu-lista-link');
const itemSobre = itensHeader[0];
const itemProjetos = itensHeader[1];
const itemEducacao = itensHeader[2];
const itemIdiomas = itensHeader[3];
const itemLinks = itensHeader[4];

const secaoSobre = document.querySelector('#sobre');
const secaoProjetos1 = document.querySelector('#projetos1');
const secaoProjetos2 = document.querySelector('#projetos2');
const secaoProjetos3 = document.querySelector('#projetos3');
const secaoProjetos4 = document.querySelector('#projetos4');
const secaoEducacao = document.querySelector('#educacao');
const secaoIdiomas = document.querySelector('#idiomas');
const secaoLinks = document.querySelector('#links');

const fimSobre = secaoSobre.offsetTop + secaoSobre.offsetHeight;
const fimProjeto1 = secaoProjetos1.offsetTop + secaoProjetos1.offsetHeight;
const fimProjeto2 = secaoProjetos2.offsetTop + secaoProjetos2.offsetHeight;
const fimProjeto3 = secaoProjetos3.offsetTop + secaoProjetos3.offsetHeight;
const fimProjeto4 = secaoProjetos4.offsetTop + secaoProjetos4.offsetHeight;
const fimProjetos = secaoProjetos1.offsetTop + secaoProjetos1.offsetHeight + secaoProjetos2.offsetHeight + secaoProjetos3.offsetHeight + secaoProjetos4.offsetHeight;
const fimEducacao = secaoEducacao.offsetTop + secaoEducacao.offsetHeight;
const fimIdiomas = secaoIdiomas.offsetTop + secaoIdiomas.offsetHeight;
const fimLinks = secaoLinks.offsetTop + secaoLinks.offsetHeight;

const metadeTela = window.innerHeight / 2;

const sobreTitulo = document.querySelector('.sobre-titulo');
const sobreTexto = document.querySelector('.sobre-texto');
const projetoTitulo = document.querySelector('.projetos-titulo');
const projetoNome1 = document.querySelector('.projeto-nome1');
const projetoNome2 = document.querySelector('.projeto-nome2');
const projetoNome3 = document.querySelector('.projeto-nome3');
const projetoNome4 = document.querySelector('.projeto-nome4');
const projetosTexto1 = document.querySelector('.projetos-texto1');
const projetosTexto2 = document.querySelector('.projetos-texto2');
const projetosTexto3 = document.querySelector('.projetos-texto3');
const projetosTexto4 = document.querySelector('.projetos-texto4');
const projetoLinks1 = document.querySelector('.projeto-links1');
const projetoLinks2 = document.querySelector('.projeto-links2');
const projetoLinks3 = document.querySelector('.projeto-links3');
const projetoLinks4 = document.querySelector('.projeto-links4');
const educacaoTitulo = document.querySelector('.educacao-titulo');
const educacaoTexto = document.querySelector('.educacao-texto');
const idiomasTitulo = document.querySelector('.idiomas-titulo');
const idiomasLinhas = document.querySelector('.idiomas-linhas');
const linksTitulo = document.querySelector('.links-titulo');
const linksLista = document.querySelector('.links-lista');

document.addEventListener('scroll', ()=>{
    var valorScroll = window.scrollY;

    if (valorScroll<100) {
        itemSobre.classList.remove('ativo');
    }

    if (valorScroll>=100 && valorScroll<fimSobre) {
        itemSobre.classList.add('ativo');
        itemProjetos.classList.remove('ativo');

        sobreTitulo.classList.add('animaTitulo');
        sobreTexto.classList.add('animaTexto');

        projetoNome2.classList.remove('animaProjeto')
        projetosTexto2.classList.remove('animaTexto');
        projetoLinks2.classList.remove('animaTexto');
    }

    if (valorScroll>=fimSobre-metadeTela && valorScroll<fimProjetos) {
        itemProjetos.classList.add('ativo');
        itemSobre.classList.remove('ativo');
        itemEducacao.classList.remove('ativo');
    }

    if (valorScroll>=fimSobre-metadeTela && valorScroll<fimProjeto1){
        projetoTitulo.classList.add('animaTitulo');
        projetoNome1.classList.add('animaProjeto')
        projetosTexto1.classList.add('animaTexto');
        projetoLinks1.classList.add('animaTexto');

        projetoNome3.classList.remove('animaProjeto')
        projetosTexto3.classList.remove('animaTexto');
        projetoLinks3.classList.remove('animaTexto');
    }

    if(valorScroll>=fimProjeto1-metadeTela && valorScroll<fimProjeto2){
        projetoNome2.classList.add('animaProjeto');
        projetosTexto2.classList.add('animaTexto');
        projetoLinks2.classList.add('animaTexto');
        
        sobreTitulo.classList.remove('animaTitulo');
        sobreTexto.classList.remove('animaTexto');
        projetoNome4.classList.remove('animaProjeto')
        projetosTexto4.classList.remove('animaTexto');
        projetoLinks4.classList.remove('animaTexto');
        // TIRAR ISSO QUANDO TIVER PROJETO 4
        educacaoTitulo.classList.remove('animaTitulo');
        educacaoTexto.classList.remove('animaTexto');
    }

    if(valorScroll>=fimProjeto2-metadeTela && valorScroll<fimProjeto3){
        projetoNome3.classList.add('animaProjeto');
        projetosTexto3.classList.add('animaTexto');
        projetoLinks3.classList.add('animaTexto');
        
        projetoTitulo.classList.remove('animaTitulo');
        projetoNome1.classList.remove('animaProjeto');
        projetosTexto1.classList.remove('animaTexto');
        projetoLinks1.classList.remove('animaTexto');
        // TIRAR COMENTARIO QUANDO TIVER PROJETO 4
        // educacaoTitulo.classList.remove('animaTitulo');
        // educacaoTexto.classList.remove('animaTexto');
    }

    if(valorScroll>=fimProjeto3-metadeTela && valorScroll<fimProjeto4){
        projetoNome4.classList.add('animaProjeto');
        projetosTexto4.classList.add('animaTexto');
        projetoLinks4.classList.add('animaTexto');
        
        projetoNome2.classList.remove('animaProjeto');
        projetosTexto2.classList.remove('animaTexto');
        projetoLinks2.classList.remove('animaTexto');
        idiomasTitulo.classList.remove('animaTitulo');
        idiomasLinhas.classList.remove('animaTexto');
    }

    if (valorScroll>=fimProjetos-metadeTela && valorScroll<fimEducacao){
        itemEducacao.classList.add('ativo');
        itemProjetos.classList.remove('ativo');
        itemIdiomas.classList.remove('ativo');

        educacaoTitulo.classList.add('animaTitulo');
        educacaoTexto.classList.add('animaTexto');

        // TIRAR COMENTARIO QUANDO TIVER PROJETO 4
        // projetoNome3.classList.remove('animaProjeto');
        // projetosTexto3.classList.remove('animaTexto');
        // projetoLinks3.classList.remove('animaTexto');
        linksTitulo.classList.remove('animaTitulo');
        linksLista.classList.remove('animaTexto');
    }

    if (valorScroll>=fimEducacao-metadeTela && valorScroll<fimIdiomas){
        itemIdiomas.classList.add('ativo');
        itemEducacao.classList.remove('ativo');
        itemLinks.classList.remove('ativo');

        idiomasTitulo.classList.add('animaTitulo');
        idiomasLinhas.classList.add('animaTexto');

        // TIRAR COMENTARIO QUANDO TIVER PROJETO 4
        // projetoNome4.classList.remove('animaProjeto');
        // projetosTexto4.classList.remove('animaTexto');
        // projetoLinks4.classList.remove('animaTexto');

        // TIRAR ISSO QUANDO TIVER PROJETO 4
        projetoNome3.classList.remove('animaProjeto');
        projetosTexto3.classList.remove('animaTexto');
        projetoLinks3.classList.remove('animaTexto');
    }

    if (valorScroll>=fimIdiomas-metadeTela){
        itemLinks.classList.add('ativo');
        itemIdiomas.classList.remove('ativo');

        linksTitulo.classList.add('animaTitulo');
        linksLista.classList.add('animaTexto');

        educacaoTitulo.classList.remove('animaTitulo');
        educacaoTexto.classList.remove('animaTexto');
    }
})