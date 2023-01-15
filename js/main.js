//const newDate = new Date(dateUser)
//console.log(newDate.toLocaleString("pt-BR", {timeZone: "UTC"})) //@ CONVERTER DATA EM TIMESTAMP PARA DATA

let usuarios = []

let nomeUser = document.getElementById("nome-user")
let stringDateUser = document.getElementById("date")


//@ FUNÇÃO PARA ABRIR O MODAL - adicionar
const modal = document.getElementById("modal-overlay")
const modalAdicionar = document.getElementById("add")
const modalEditar = document.getElementById("edit")

function abrirModalAdicionar(){
    const btnAdicionar = document.getElementById("btn-adicionar");
    const pAdicionar = document.getElementById("p-adicionar");    
    
    function exibirModal(){
        modal.style.display = "flex"
        modalAdicionar.style.display = "inline"
        modalEditar.style.display = "none"        
    }

    btnAdicionar.addEventListener("click", exibirModal)
    pAdicionar.addEventListener("click", exibirModal)
}
abrirModalAdicionar()

    let nomeUserNovo = ""
    let dateUser = ""

modalAdicionar.addEventListener("click", adicionarPerfil)
function adicionarPerfil(){

    let lis = [...document.getElementsByTagName("li")]

    if(lis.length < 5){
        nomeUserNovo = nomeUser.value
        dateUser = Date.parse(stringDateUser.value)

        if(nomeUserNovo && dateUser){
            criarLi(nomeUserNovo, dateUser, true)
            fecharModal()
            
        } else {
            alert("Por favor, preencha todos os dados para conseguirmos te adicionar na nossa galáxia")
        }
    } else {
        fecharModal()   
        alert("O número máximo de pessoas cadastradas foi atingido. Para adicionar uma outra pessoa você pode remover as anteriores ou editar seus dados")
    }


}

//@ CRIAR AS LI'S

function criarLi(nomeUser, dateUser, precisaSalvar){
    //criando a li =
    const li = document.createElement("li")
    li.className = "usuario"

    //criando btn do usuário =
    const btnUser = document.createElement("button")
    btnUser.className = "btn-usuario"
    btnUser.innerHTML = nomeUser
    li.appendChild(btnUser)

    //criando btn de editar = 
    const editButton = document.createElement("i");
    editButton.className = "fas fa-edit";
    li.appendChild(editButton)

    //criando btn de remover = 
    const deleteButton = document.createElement("i");
    deleteButton.className = "fas fa-trash-alt";
    //@@@@deleteButton.addEventListener("click", deletar);
    li.appendChild(deleteButton)

    //adicionando a li na ul =
    ul.appendChild(li)

    //salvar no localstorage
    salvarLocalstorage(precisaSalvar, nomeUser, dateUser)
}



//@ Função para salvar no localstorage =
function salvarLocalstorage(precisaSalvar, nomeUser, dateUser) {
    if (precisaSalvar) {
        const usuario = {
            nomeUser: nomeUser,
            dataUser: dateUser
        }
        usuarios.push(usuario);
        localStorage.setItem(`${nomeUser}`, JSON.stringify(usuario));
    }
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
const overlay = document.getElementById("modal-overlay");

//@ FUNÇÃO PARA FECHAR O MODAL
function fecharModal() {
    overlay.style.display = "none";
    nomeUser.value = ""
    stringDateUser.value = ""
}

function fecharModalClickFora() {
    document.documentElement.onclick = (event) => {
        if (event.target == overlay) {
            overlay.style.display = "none";
            nomeUser.value = ""
            stringDateUser.value = ""    
        }
    }
}
fecharModalClickFora()

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

//console.log(lis)






