// Menu Mobile interativo
let btnMenu =  document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Validação Formulário

const form = document.getElementById('form')
const campos = document.querySelectorAll(".input-required")
const spans = document.querySelectorAll(".error")
const acce = document.querySelectorAll(".check")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const celularRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checknome();
    checkmail();
    checkcelular();
});

function SetError(index){
    campos[index].style.border = "2px solid #ff1b1bd3";
    acce[index].style.display = "none";
    spans[index].style.display = "flex";
}

function SetAccept(index){
    campos[index].style.border = "2px solid #22b940dd";
    spans[index].style.display = "none";
    acce[index].style.display = "block";
 }


function checknome(){
    if(campos[0].value.length < 3)
    {
        SetError(0);
        return false;
        // Nome inválido
    }
    else
    {
        SetAccept(0);
        return true;
        // Nome válido
    }
}

function checkmail(){
    if(emailRegex.test(campos[1].value))
    {
        SetAccept(1);
        return true; 
        // Email válido
    }
    else
    {
        SetError(1);
        return false;
        // Email inválido
    }
}

function checkcelular(){
    if(celularRegex.test(campos[2].value))
    {
        SetAccept(2);
        return true;
        // Celular válido
    }
    else{
        SetError(2);
        return false;
        // Celular inválido
    }
 }

function exibirAlerta() {
    if (checknome() && checkmail() && checkcelular())
    {
        window.alert("Informaçoes enviadas com sucesso!");
    }
    else
    {
        window.alert("Atenção! Preencha os dados corretamente antes de enviá-los");
    }
}