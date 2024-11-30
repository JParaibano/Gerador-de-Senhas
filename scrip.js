// Selecioando os elementos do HTML
let sliderElement = document.querySelector("#slider"); 
let buttonElement = document.querySelector("#button"); 

let sizePassword = document.querySelector("#valor"); 
let passwordElement = document.querySelector("#password"); 

let containerPassword = document.querySelector("#container-password"); 
let tooltipElement = document.querySelector(".tooltip"); 

// Caracteres disponíveis para gerar a senha
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";

// Mensagens de copia tootip
let comecoCopy = "Clique na senha para copiar. 👆";
let finalCopy = "Senha Copiada ✅";

// Exibe o valor inicial do slider
sizePassword.innerHTML = sliderElement.value;

// Atualiza o valor exibido quando o slider é movido
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// Gera senha aleatória com base no tamanho definido no slider
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    // Deixa o contêiner visível exibindo a senha
    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
}

// Obtém a senha gerada e prepara para cópia
function copyPassword(){  
    let password = passwordElement.innerHTML;
    
    // Alterna mensagem do tooltip
    tooltipElement.innerHTML = comecoCopy;
    setTimeout(function() {
        tooltipElement.innerHTML = finalCopy;
    }, 1000)

    // Copia senha
    navigator.clipboard.writeText(password);
    alert("Senha copiada com sucesso!");
}