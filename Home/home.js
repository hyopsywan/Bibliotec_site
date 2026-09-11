const menu = document.getElementById("menu");  /*Pegando o elemnto pelo ID*/

// Estamos pegando o elemnto de forma genérica, pode chamr por .classe ou #ID
const navMenu = document.querySelector(".navegacao");

menu.addEventListener("click", function() {
    if(navMenu.className == "navegacao"){
    navMenu.className = "navegacao ativo";
    } 
    else {
        navMenu.className = "navegacao";
    }

})

// menu.addEventListener("click", () => {})
// Opção com arrow -> função Lambda.