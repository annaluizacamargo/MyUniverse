//@ FUNÇÃO PARA ABRIR O MODAL
const modal = document.getElementById("modal-overlay")
const modalAdicionar = document.getElementById("add")
const modalEditar = document.getElementById("edit")

function abrirModalAdicionar(){
    modal.style.display = "flex"
    modalAdicionar.style.display = "inline"
    modalEditar.style.display = "none"
}

function abrirModalEditar(){
    modal.style.display = "flex"
    modalAdicionar.style.display = "none"
    modalEditar.style.display = "inline"
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
    const btnEdit = document.getElementsByClassName("fa-edit");

    btnEdit.addEventListener("click", abrirModalEditar)

    console.log(btnEdit)
}
//editarPerfil()

//@FUNÇÃO PARA CRIAR LI'S
const ul = document.getElementById("usuarios");
console.log(ul)

//@FUNÇÃO PARA ABRIR PÁGINA API
const lis = [...document.getElementsByTagName("li")]
console.log(lis)



console.log("MyUniverse")




