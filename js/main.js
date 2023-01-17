//Chave local Storage
//Adicionar redirecionamento em imagem capturada hoje

let usuarios = [];
let nomeUser = document.getElementById("nome-user");
let stringDateUser = document.getElementById("date");

//@ Função para recuperar os dados armazenados no localstorage e passar os parâmetros para criar as li's
function recuperarDados() {
    for (i = 0; i < localStorage.length; i++) {
        let keyUsuario = localStorage.key(i);
        if (keyUsuario != "user-api") {
            let valueKey = localStorage.getItem(keyUsuario);
            let dadosUsuario = JSON.parse(valueKey);
            let nomeUser = dadosUsuario.nomeUser;
            let dateUser = dadosUsuario.dateUser;
            criarLi(nomeUser, dateUser, false);
        }
    }
}
recuperarDados();


//@ Função para abrir o modal - adicionar
const modal = document.getElementById("modal-overlay");
const modalAdicionar = document.getElementById("add");
const modalEditar = document.getElementById("edit");
let nomeUserNovo = "";
let dateUser = "";

function abrirModalAdicionar() {
    const pAdicionar = document.getElementById("p-adicionar");

    function exibirModal() {
        modal.style.display = "flex";
        modalAdicionar.style.display = "inline";
        modalEditar.style.display = "none";
    }

    pAdicionar.addEventListener("click", exibirModal);
}
abrirModalAdicionar();

modalAdicionar.addEventListener("click", adicionarPerfil);

const dateLimit = Date.parse("1995-06-16") //803260800000
const today = Date.parse(new Date()) //Timestamp data hoje

console.log(today)
function adicionarPerfil() {
    let lis = [...document.getElementsByTagName("li")];
    
    if(lis.length < 5){
        nomeUserNovo = nomeUser.value;
        dateUser = Date.parse(stringDateUser.value);
        avaliarDadosInformados(dateUser, nomeUserNovo);
    } else {
        fecharModal();
        alert("O número máximo de pessoas cadastradas foi atingido. Para adicionar uma outra pessoa você pode remover as anteriores ou editar seus dados");
    }
}

function avaliarDadosInformados(dateUser, nomeUserNovo) {   
    switch(true){
        case(!nomeUserNovo || !dateUser):
            alert("Por favor, preencha todos os dados para conseguirmos te adicionar na nossa galáxia");
            break;
        case (dateUser < dateLimit):
            alert("Sinto muito mas só temos imagens disponíveis a partir do dia 16/06/1995, por favor insira outra data :)");
            break;
        case (dateUser > today):
            alert("Infelizmente ainda não conseguimos viajar no tempo, favor inserir uma data válida :)");
            break;
        default:
            console.log("sim 4")
            criarLi(nomeUserNovo, dateUser, true);
            fecharModal();
    }
}

//@ Função para criar as li's
function criarLi(nomeUser, dateUser, precisaSalvar) {
    const ul = document.getElementById("usuarios");

    //criando a li =
    const li = document.createElement("li");
    li.className = "usuario";

    //criando btn do usuário =
    const btnUser = document.createElement("button");
    btnUser.className = "btn-usuario";
    btnUser.innerHTML = nomeUser;
    li.appendChild(btnUser);

    //criando btn de editar = 
    const editButton = document.createElement("i");
    editButton.className = "fas fa-edit";
    editButton.addEventListener("click", edit);
    li.appendChild(editButton);

    //criando btn de remover = 
    const deleteButton = document.createElement("i");
    deleteButton.className = "fas fa-trash-alt";
    deleteButton.addEventListener("click", remove);
    li.appendChild(deleteButton);

    //adicionando a li na ul =
    ul.appendChild(li);

    //salvar no localstorage
    salvarLocalstorage(precisaSalvar, nomeUser, dateUser);
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


//@ Função para editar o Usuário
let nameUserBefore = null;
function edit() {
    modal.style.display = "flex";
    modalAdicionar.style.display = "none";
    modalEditar.style.display = "inline";

    nameUserBefore = this.parentElement.firstElementChild;
    let valueKey = localStorage.getItem(`${nameUserBefore.textContent}`);
    let dadosUsuario = JSON.parse(valueKey);
    let nameUser = dadosUsuario.nomeUser;
    let dateUser = dadosUsuario.dateUser;
    const newDate = new Date(dateUser);
    const date = newDate.toLocaleDateString('en-CA', {timeZone: "UTC"});

    let inputNovoNome = modalEditar.parentElement.querySelector("#nome-user");
    inputNovoNome.value = nameUser;
    
    let inputNovoDate = modalEditar.parentElement.querySelector("#date");
    inputNovoDate.value = date;
}

function editLi() {
    modalEditar.addEventListener("click", () => {
        let inputNovoNome = modalEditar.parentElement.querySelector("#nome-user");
        let inputNovoDate = modalEditar.parentElement.querySelector("#date");
        let keyAntiga = nameUserBefore.textContent;
        let novoNome = inputNovoNome.value;
        nameUserBefore.textContent = novoNome;
        let novoDate = Date.parse(inputNovoDate.value);

        if (!novoNome) {
            alert("Por favor, preencha todos os dados para conseguirmos te adicionar na nossa galáxia");
            document. location. reload()            
        } else if (!novoDate) {
            alert("Por favor, preencha todos os dados para conseguirmos te adicionar na nossa galáxia");
        } else if (novoDate < dateLimit) {
            alert("Sinto muito mas só temos imagens disponíveis a partir do dia 16/06/1995, por favor insira outra data :)");
    
        } else if (novoDate > today) {
            alert("Infelizmente ainda não conseguimos viajar no tempo, favor inserir uma data válida :)");
        } else {
            update(keyAntiga, novoNome, novoDate);
            fecharModal();        
        }
    })
}
editLi();


//@ Função para atualizar os dados do localstorage
function update(keyAntiga, novoNome, novoDate) {
    localStorage.removeItem(keyAntiga);
    localStorage.setItem(novoNome, JSON.stringify({nomeUser: novoNome, dateUser: novoDate}));
}


//@ Função para remover o Usuário
function remove(event) {
    const liRemove = event.target.parentElement;
    const nameUserRemove = liRemove.firstElementChild.textContent;

    localStorage.removeItem(nameUserRemove);
    liRemove.remove();
}


//@ Função para fechar o modal
const overlay = document.getElementById("modal-overlay");
const closeModal = document.querySelector(".close");

function fecharModal() {
    overlay.style.display = "none";
    nomeUser.value = "";
    stringDateUser.value = "";
}

function fecharModalClickFora() {
    document.documentElement.onclick = (event) => {
        if (event.target == overlay) {
            overlay.style.display = "none";
            nomeUser.value = "";
            stringDateUser.value = "";
        }
    }
}
fecharModalClickFora();
closeModal.addEventListener("click", fecharModal);

//@Função para abrir página da API
let btnsUser = [...document.getElementsByClassName("btn-usuario")];
btnsUser.forEach((btnUser) => {
    btnUser.addEventListener("click", (event) => {
        const valueKey = localStorage.getItem(`${event.target.textContent}`);
        localStorage.setItem("user-api", valueKey);
        window.location.href = '/MyUniverse/result-api.html';
    })
})
