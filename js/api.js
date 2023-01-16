//@ Fazendo integração com o DOM
let nomeAPI = document.getElementById("name");
let dateAPI = document.getElementById("date");
let imgAPI = document.getElementById("img-api");
let linkImgAPI = document.getElementById("link-img-api");
let explanantionAPI = document.getElementById("explanation-api");


//@ Capturando e convertendo os dados do localstorage e integrando ao DOM
const dadosLocalStorage = localStorage.getItem("user-api"); //Capturando os values do localstorage (typeof = string)
const dadosLocalStorageConvertidos = JSON.parse(dadosLocalStorage); //Transformando os values capturados do localstorage (typeof = object (nomeUser: string, dateUser: timestamp))

const nameUser = dadosLocalStorageConvertidos.nomeUser;//Capturando o nome/apelido do usuário
nomeAPI.textContent = nameUser; //Exibindo nome na tela

const dateUser = new Date(dadosLocalStorageConvertidos.dateUser); //Capturando a data em timestamp e convertendo em data por extenso
const date = dateUser.toLocaleDateString('en-CA', {timeZone: "UTC"}); //Convertendo a data para o modelo aceito pela API (aaaa-mm-dd)
dateAPI.textContent = dateUser.toLocaleDateString('pt-br', {timeZone: "UTC"}); //Convertendo a data para o modelo brasileiro (dd/mm/aaaa) e exibindo na tela


//@ Capturando os dados da API da NASA e integrando ao DOM
async function buscaImagemNASA(date) {
    const apiKey = "bkk31nnfNbtwuzjWOiF5GZKs2IGyhE4HVEANlUcy";
    const consultaDadosData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
    const dadosConvertidos = await consultaDadosData.json();
    
    imgAPI.setAttribute("src", `${dadosConvertidos.url}`);
    linkImgAPI.setAttribute("href", `${dadosConvertidos.url}`);
    explanantionAPI.innerHTML = `<b>Descrição:</b> ${dadosConvertidos.explanation}`;
}
buscaImagemNASA(date);


//@ Dando a opção de tradução da descrição para o usuário
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}
