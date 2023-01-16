//const newDate = new Date(dateUser)
//console.log(newDate.toLocaleString("pt-BR", {timeZone: "UTC"})) //@ CONVERTER DATA EM TIMESTAMP PARA DATA
//<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js"></script>

//let consultaCosmos = fetch('https://api.nasa.gov/planetary/apod? api_key=bkk31nnfNbtwuzjWOiF5GZKs2IGyhE4HVEANlUcy')
//console.log(consultaCosmos)

//@ Fazendo integração com o DOM
const nomeAPI = document.getElementById("name")
nomeAPI.textContent = "oi"
const dateAPI = document.getElementById("date")
dateAPI.textContent = "07/11/2000"

const imgAPI = document.getElementById("img-api")
imgAPI.setAttribute("src", "https://camo.githubusercontent.com/ce48ea68fb43482500f04181a7f604b9b474b6d88b9876d2c3e4759a5146a4dd/68747470733a2f2f63646e2e7069637265772e6d652f7368617265496d672f6f72672f3230323330312f3730373039305f4e324533596c784e2e706e67")

const explanantionAPI = document.getElementById("explanation-api")
explanantionAPI.innerHTML = "<b>Explanation:</b> oioioi"


const dadosLocalStorage = localStorage.getItem("user-api"); //Capturando os values do localstorage (typeof = string)
const dadosLocalStorageConvertidos = JSON.parse(dadosLocalStorage); //Transformando os values capturados do localstorage (typeof = object (nomeUser: string, dateUser: timestamp))

const nameUser = dadosLocalStorageConvertidos.nomeUser;//Capturando o nome/apelido do usuário
const dateUser = new Date(dadosLocalStorageConvertidos.dateUser); //Capturando a data em timestamp e convertendo em data por extenso
const date = dateUser.toLocaleDateString('en-CA', {timeZone: "UTC"}); //Convertendo a data para o modelo aceito pela API (aaaa-mm-dd)

async function buscaImagemNASA(date){
    const apiKey = "bkk31nnfNbtwuzjWOiF5GZKs2IGyhE4HVEANlUcy";
    let consultaData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
    let consultaDataConvertida = await consultaData.json()
    console.log(consultaDataConvertida)
    console.log("fim")
}
buscaImagemNASA(date)


