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
const secaoEducacao = document.querySelector('#educacao');
const secaoIdiomas = document.querySelector('#idiomas');
const secaoLinks = document.querySelector('#links');

const fimSobre = secaoSobre.offsetTop + secaoSobre.offsetHeight;
const fimProjeto1 = secaoProjetos1.offsetTop + secaoProjetos1.offsetHeight;
const fimProjetos = secaoProjetos1.offsetTop + secaoProjetos1.offsetHeight + secaoProjetos2.offsetHeight;
const fimEducacao = secaoEducacao.offsetTop + secaoEducacao.offsetHeight;
const fimIdiomas = secaoIdiomas.offsetTop + secaoIdiomas.offsetHeight;
const fimLinks = secaoLinks.offsetTop + secaoLinks.offsetHeight;

const metadeTela = window.innerHeight / 2;

const sobreTitulo = document.querySelector('.sobre-titulo');
const sobreTexto = document.querySelector('.sobre-texto');
const projetoTitulo = document.querySelector('.projetos-titulo');
const projetoNome1 = document.querySelector('.projeto-nome1');
const projetoNome2 = document.querySelector('.projeto-nome2');
const projetosTexto1 = document.querySelector('.projetos-texto1');
const projetosTexto2 = document.querySelector('.projetos-texto2');
const projetoLinks1 = document.querySelector('.projeto-links1');
const projetoLinks2 = document.querySelector('.projeto-links2');
const educacaoTitulo = document.querySelector('.educacao-titulo');
const educacaoTexto = document.querySelector('.educacao-texto');
const idiomasTitulo = document.querySelector('.idiomas-titulo');
const idiomasLinhas = document.querySelector('.idiomas-linhas');
const linksTitulo = document.querySelector('.links-titulo');
const linksLista = document.querySelector('.links-lista');
const tag2 = document.querySelector('.tag2');

document.addEventListener('scroll', ()=>{
    var telaPequena = window.matchMedia("(max-width: 1025px)")
    var valorScroll = window.scrollY;

    if(telaPequena.matches){
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

            educacaoTitulo.classList.remove('animaTitulo');
            educacaoTexto.classList.remove('animaTexto');
        }

        if(valorScroll>=fimProjeto1-metadeTela && valorScroll<fimProjetos){
            projetoNome2.classList.add('animaProjeto');
            projetosTexto2.classList.add('animaTexto');
            projetoLinks2.classList.add('animaTexto');
            
            sobreTitulo.classList.remove('animaTitulo');
            sobreTexto.classList.remove('animaTexto');
            idiomasTitulo.classList.remove('animaTitulo');
            idiomasLinhas.classList.remove('animaTexto');
        }

        if (valorScroll>=fimProjetos-metadeTela && valorScroll<fimEducacao) {
            itemEducacao.classList.add('ativo');
            itemProjetos.classList.remove('ativo');
            itemIdiomas.classList.remove('ativo');

            educacaoTitulo.classList.add('animaTitulo');
            educacaoTexto.classList.add('animaTexto');

            projetoTitulo.classList.remove('animaTitulo');
            projetoNome1.classList.remove('animaProjeto');
            projetosTexto1.classList.remove('animaTexto');
            projetoLinks1.classList.remove('animaTexto');
            linksTitulo.classList.remove('animaTitulo');
            linksLista.classList.remove('animaTexto');
        }

        if (valorScroll>=fimEducacao-metadeTela && valorScroll<fimIdiomas) {
            itemIdiomas.classList.add('ativo');
            itemEducacao.classList.remove('ativo');
            itemLinks.classList.remove('ativo');

            idiomasTitulo.classList.add('animaTitulo');
            idiomasLinhas.classList.add('animaTexto');

            projetoNome2.classList.remove('animaProjeto');
            projetosTexto2.classList.remove('animaTexto');
            projetoLinks2.classList.remove('animaTexto');
        }

        if (valorScroll>=fimIdiomas-metadeTela) {
            itemLinks.classList.add('ativo');
            itemIdiomas.classList.remove('ativo');

            linksTitulo.classList.add('animaTitulo');
            linksLista.classList.add('animaTexto');

            educacaoTitulo.classList.remove('animaTitulo');
            educacaoTexto.classList.remove('animaTexto');
        }
    }else{
        if (valorScroll<100) {
            itemSobre.classList.remove('ativo');
        }

        if (valorScroll>=100 && valorScroll<fimSobre) {
            itemSobre.classList.add('ativo');
            itemProjetos.classList.remove('ativo');

            projetoNome2.classList.remove('animaProjeto')
            projetosTexto2.classList.remove('animaTexto');
            projetoLinks2.classList.remove('animaTexto');
        }

        if (valorScroll>=fimSobre && valorScroll<fimProjetos) {
            itemProjetos.classList.add('ativo');
            itemSobre.classList.remove('ativo');
            itemEducacao.classList.remove('ativo');
        }

        if (valorScroll>=fimSobre && valorScroll<fimProjeto1){
            projetoTitulo.classList.add('animaTitulo');
            projetoNome1.classList.add('animaProjeto')
            projetosTexto1.classList.add('animaTexto');
            projetoLinks1.classList.add('animaTexto');

            educacaoTitulo.classList.remove('animaTitulo');
            educacaoTexto.classList.remove('animaTexto');
        }

        if(valorScroll>=fimProjeto1 && valorScroll<fimProjetos){
            projetoNome2.classList.add('animaProjeto');
            projetosTexto2.classList.add('animaTexto');
            projetoLinks2.classList.add('animaTexto');
            
            sobreTitulo.classList.remove('animaTitulo');
            sobreTexto.classList.remove('animaTexto');
            idiomasTitulo.classList.remove('animaTitulo');
            idiomasLinhas.classList.remove('animaTexto');
        }

        if (valorScroll>=fimProjetos && valorScroll<fimEducacao) {
            itemEducacao.classList.add('ativo');
            itemProjetos.classList.remove('ativo');
            itemIdiomas.classList.remove('ativo');

            educacaoTitulo.classList.add('animaTitulo');
            educacaoTexto.classList.add('animaTexto');

            projetoTitulo.classList.remove('animaTitulo');
            projetoNome1.classList.remove('animaProjeto');
            projetosTexto1.classList.remove('animaTexto');
            projetoLinks1.classList.remove('animaTexto');
            linksTitulo.classList.remove('animaTitulo');
            linksLista.classList.remove('animaTexto');
        }

        if (valorScroll>=fimEducacao && valorScroll<fimIdiomas) {
            itemIdiomas.classList.add('ativo');
            itemEducacao.classList.remove('ativo');
            itemLinks.classList.remove('ativo');

            idiomasTitulo.classList.add('animaTitulo');
            idiomasLinhas.classList.add('animaTexto');

            projetoNome2.classList.remove('animaProjeto');
            projetosTexto2.classList.remove('animaTexto');
            projetoLinks2.classList.remove('animaTexto');
        }

        if (valorScroll>=fimIdiomas) {
            itemLinks.classList.add('ativo');
            itemIdiomas.classList.remove('ativo');

            linksTitulo.classList.add('animaTitulo');
            linksLista.classList.add('animaTexto');

            educacaoTitulo.classList.remove('animaTitulo');
            educacaoTexto.classList.remove('animaTexto');
        }
    }
})