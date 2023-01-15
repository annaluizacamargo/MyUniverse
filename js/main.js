//const newDate = new Date(dateUser)
//console.log(newDate.toLocaleString("pt-BR", {timeZone: "UTC"})) //@ CONVERTER DATA EM TIMESTAMP PARA DATA

let usuarios = [];
let nomeUser = document.getElementById("nome-user");
let stringDateUser = document.getElementById("date");

//@ Função para recuperar os dados armazenados no localstorage e passar os parâmetros para criar as li's =
function recuperarDados() {
    for(i = 0; i < localStorage.length; i++){
        let keyUsuario = localStorage.key(i);
        let valueKey = localStorage.getItem(keyUsuario);
        let dadosUsuario = JSON.parse(valueKey);

        let nomeUser = dadosUsuario.nomeUser;
        let dateUser = dadosUsuario.dateUser;

        criarLi(nomeUser, dateUser, false);
    }
}
recuperarDados()


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
    const ul = document.getElementById("usuarios");

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
    editButton.addEventListener("click", edit)
    li.appendChild(editButton)

    //criando btn de remover = 
    const deleteButton = document.createElement("i");
    deleteButton.className = "fas fa-trash-alt";
    deleteButton.addEventListener("click", remove);
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
            dateUser: dateUser
        }
        usuarios.push(usuario);
        localStorage.setItem(`${nomeUser}`, JSON.stringify(usuario));
    }
}

//@ FUNÇÃO PARA EDITAR O MODAL
function edit(){
    modal.style.display = "flex"
    modalAdicionar.style.display = "none"
    modalEditar.style.display = "inline"

    let nameUserBefore = this.parentElement.firstElementChild
    let valueKey = localStorage.getItem(`${nameUserBefore.textContent}`);
    let dadosUsuario = JSON.parse(valueKey);
    let nameUser = dadosUsuario.nomeUser;
    let dateUser = dadosUsuario.dateUser;
    const newDate = new Date(dateUser)
    const date = newDate.toLocaleDateString('en-CA', {timeZone: "UTC"})    

    let inputNovoNome = modalEditar.parentElement.querySelector("#nome-user")
    inputNovoNome.value = nameUser
    
    let inputNovoDate = modalEditar.parentElement.querySelector("#date")
    inputNovoDate.value = date

    modalEditar.addEventListener("click", () => {
        let keyAntiga = nameUserBefore.textContent
        let novoNome = inputNovoNome.value
        nameUserBefore.textContent = novoNome
        let novoDate = inputNovoDate.value
        update(keyAntiga, novoNome, novoDate)    
    })
}


function update(keyAntiga, novoNome, novoDate){
    console.log(keyAntiga)
    localStorage.removeItem(keyAntiga)
    localStorage.setItem(novoNome, JSON.stringify({nomeUser: novoNome, dateUser: novoDate}))
}


function remove(){

}

//@ FUNÇÃO PARA FECHAR O MODAL
const overlay = document.getElementById("modal-overlay");
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



//@FUNÇÃO PARA CRIAR LI'S

//console.log(ul)

//@FUNÇÃO PARA ABRIR PÁGINA API

//console.log(lis)






