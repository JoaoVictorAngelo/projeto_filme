$(document).ready(function(){
    $('.hero__carousel').slick({
        Infinity:true,
        dots:false,
        autoplay:true,
        arrows:false,
        autoplaySpeed:2000,
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('trailer__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('trailer__tabs__button--is-active');
        });
    } 
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('trailer__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('trailer__list--is-active');
    }
}