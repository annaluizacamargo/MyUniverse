//const newDate = new Date(dateUser)
//console.log(newDate.toLocaleString("pt-BR", {timeZone: "UTC"})) //@ CONVERTER DATA EM TIMESTAMP PARA DATA

let usuarios = {}

const nomeUser = document.getElementById("nome-user")
const stringDateUser = document.getElementById("date")


//@ FUNÇÃO PARA ABRIR O MODAL - adicionar
const modal = document.getElementById("modal-overlay")
const modalAdicionar = document.getElementById("add")
const modalEditar = document.getElementById("edit")

function abrirModalAdicionar(){
    const btnAdicionar = document.getElementById("btn-adicionar");
    const pAdicionar = document.getElementById("p-adicionar");    
    
    btnAdicionar.addEventListener("click", adicionarPerfil)
    pAdicionar.addEventListener("click", adicionarPerfil)
}
abrirModalAdicionar()

function adicionarPerfil(){
    //Exibir modal
    modal.style.display = "flex"
    modalAdicionar.style.display = "inline"
    modalEditar.style.display = "none"

    //Adicionar perfil
    //const nomeUser = 
    console.log(this)
    console.log(modal)
    modalAdicionar.addEventListener("click", (event) => {
        const nomeUserNovo = nomeUser.value
        const dateUser = Date.parse(stringDateUser.value)
        criarLi(nomeUserNovo, dateUser)
    })
}

//@ CRIAR AS LI'S

function criarLi(nomeUser, dateUser){
    console.log(ul)
    console.log(nomeUser)
    console.log(dateUser)

    //criando a li =
    const li = document.createElement("li")
    li.className = "usuario"
}






//@ FUNÇÃO PARA EDITAR O MODAL
function abrirModalEditar(nomeUserAtual){
    modal.style.display = "flex"
    modalAdicionar.style.display = "none"
    modalEditar.style.display = "inline"
    //nomeUser.value = nomeUserAtual
    //console.log(nomeUser.textContent)
    //nomeUser.nomeUser = ""
    //modalEditar.addEventListener("click", (event) => {
    //    const novoNomeUser = nomeUser.value
    //    modal.style.display = "none"
    //    console.log(novoNomeUser)
    //    console.log(event.target)
    //    console.log(modalEditar)
    //})
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






