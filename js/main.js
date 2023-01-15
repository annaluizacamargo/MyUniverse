//@ FUNÇÃO PARA ABRIR O MODAL
function abrirModal(){
    const modal = document.getElementById("modal-overlay")
    modal.style.display = "flex"
}
abrirModal()

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
function adicionarEditarPerfil(){
    const btnEdit = document.getElementsByClassName("fa-edit");
    const btnAdicionar = document.getElementById("btn-adicionar");
    const pAdicionar = document.getElementById("p-adicionar");
    console.log(btnEdit)
    console.log(btnAdicionar)
    console.log(pAdicionar)

}
adicionarEditarPerfil()

//@FUNÇÃO PARA CRIAR LI'S
const ul = document.getElementById("usuarios");
console.log(ul)

//@FUNÇÃO PARA ABRIR PÁGINA API
const lis = [...document.getElementsByTagName("li")]
console.log(lis)



console.log("MyUniverse")




