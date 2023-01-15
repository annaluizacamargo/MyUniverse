//@ FUNÇÃO PARA ABRIR O MODAL
const modal = document.getElementById("modal-overlay")
const modalAdicionar = document.getElementById("add")
const modalEditar = document.getElementById("edit")
const nomeUser = document.getElementById("nome-user")

function abrirModalAdicionar(){
    modal.style.display = "flex"
    modalAdicionar.style.display = "inline"
    modalEditar.style.display = "none"
}

console.log(nomeUser.textContent)
function abrirModalEditar(nomeUserAtual){
    modal.style.display = "flex"
    modalAdicionar.style.display = "none"
    modalEditar.style.display = "inline"
    nomeUser.value = nomeUserAtual
 
}

//@ FUNÇÃO PARA FECHAR O MODAL
function fecharModal() {
    document.documentElement.onclick = (event) => {
        const overlay = document.getElementById("modal-overlay");
        if (event.target == overlay) {
            overlay.style.display = "none";
        }
    }
}
fecharModal()

//@FUNÇÃO PARA CHAMAR O MODAL
function adicionarPerfil(){
    const btnAdicionar = document.getElementById("btn-adicionar");
    const pAdicionar = document.getElementById("p-adicionar");    
    
    btnAdicionar.addEventListener("click", abrirModalAdicionar)
    pAdicionar.addEventListener("click", abrirModalAdicionar)
}
adicionarPerfil()

function editarPerfil(){
    const btnsEdit = [...document.getElementsByClassName("fa-edit")];
    console.log(btnsEdit)

    btnsEdit.forEach((btnEdit) => {
        //console.log(btnEdit)
        btnEdit.addEventListener("click", (event) => {
            const btn = event.target
            const nomeUser = btn.parentElement.firstElementChild.textContent
            abrirModalEditar(nomeUser)
            console.log(event.target)
            console.log(nomeUser)
        })
        //console.log("fim loop")   
    })


    
}
editarPerfil()

//@FUNÇÃO PARA CRIAR LI'S
const ul = document.getElementById("usuarios");
//console.log(ul)

//@FUNÇÃO PARA ABRIR PÁGINA API
const lis = [...document.getElementsByTagName("li")]
//console.log(lis)






