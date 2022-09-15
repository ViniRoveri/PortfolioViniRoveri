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
const fimProjetos = secaoProjetos1.offsetTop + secaoProjetos1.offsetHeight + secaoProjetos2.offsetHeight;
const fimEducacao = secaoEducacao.offsetTop + secaoEducacao.offsetHeight;
const fimIdiomas = secaoIdiomas.offsetTop + secaoIdiomas.offsetHeight;
const fimLinks = secaoLinks.offsetTop + secaoLinks.offsetHeight;

const metadeTela = window.innerHeight / 2;

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
        }

        if (valorScroll>=fimSobre-metadeTela && valorScroll<fimProjetos) {
            itemProjetos.classList.add('ativo');
            itemSobre.classList.remove('ativo');
            itemEducacao.classList.remove('ativo');
        }

        if (valorScroll>=fimProjetos-metadeTela && valorScroll<fimEducacao) {
            itemEducacao.classList.add('ativo');
            itemProjetos.classList.remove('ativo');
            itemIdiomas.classList.remove('ativo');
        }

        if (valorScroll>=fimEducacao-metadeTela && valorScroll<fimIdiomas) {
            itemIdiomas.classList.add('ativo');
            itemEducacao.classList.remove('ativo');
            itemLinks.classList.remove('ativo');
        }

        if (valorScroll>=fimIdiomas-metadeTela) {
            itemLinks.classList.add('ativo');
            itemIdiomas.classList.remove('ativo');
        }
    }else{
        if (valorScroll<100) {
            itemSobre.classList.remove('ativo');
        }

        if (valorScroll>=100 && valorScroll<fimSobre) {
            itemSobre.classList.add('ativo');
            itemProjetos.classList.remove('ativo');
        }

        if (valorScroll>=fimSobre && valorScroll<fimProjetos) {
            itemProjetos.classList.add('ativo');
            itemSobre.classList.remove('ativo');
            itemEducacao.classList.remove('ativo');
        }

        if (valorScroll>=fimProjetos && valorScroll<fimEducacao) {
            itemEducacao.classList.add('ativo');
            itemProjetos.classList.remove('ativo');
            itemIdiomas.classList.remove('ativo');
        }

        if (valorScroll>=fimEducacao && valorScroll<fimIdiomas) {
            itemIdiomas.classList.add('ativo');
            itemEducacao.classList.remove('ativo');
            itemLinks.classList.remove('ativo');
        }

        if (valorScroll>=fimIdiomas) {
            itemLinks.classList.add('ativo');
            itemIdiomas.classList.remove('ativo');
        }
    }
})