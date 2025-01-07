const listaDeLetras = document.getElementById("letras")
const gerarNome = document.getElementById("gerarNome")
const validarNome = document.getElementById("validar")
const resposta = document.getElementById("resposta")
const pontos = document.getElementById("pontos")
const jogar = document.getElementById("jogar")
const categoriaDica = document.getElementById("categoria")
const somAcerto = document.getElementById("som_acerto")
const somErro = document.getElementById("som_erro")
const mensagemDeErro = document.getElementById("popup_erro")

const categorias = [nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", "Kleber", "Larissa", "Marcos", "Natália", "Otávio", "Patrícia", "Quintino", "Rafaela", "Sérgio", "Tatiana", "Ursula", "Vitor", "Wesley", "Xênia", "Yara", "Zeca", "Alice", "Bernardo", "Camila", "Diego", "Elisa", "Felipe", "Giovana", "Henrique", "Isabela", "João", "Karen", "Leonardo", "Marta", "Nicolas", "Olívia", "Pedro", "Quésia", "Renato", "Sofia", "Thiago", "Úrsula", "Vinícius", "Wagner", "Xavier", "Kauê", "Bruno", "Luiz"],
// jogadoresDeFutebol = ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Kylian Mbappé", "Kevin De Bruyne", "Robert Lewandowski", "Mohamed Salah", "Virgil van Dijk", "Sadio Mané", "Harry Kane", "Sergio Ramos", "Luka Modrić", "Eden Hazard", "Raheem Sterling", "Antoine Griezmann", "Paul Pogba", "Toni Kroos", "Karim Benzema", "Luis Suárez", "Gerard Piqué", "Manuel Neuer", "Jan Oblak", "Alisson Becker", "Ederson Moraes", "Marc-André ter Stegen", "Romelu Lukaku", "Thomas Müller", "Joshua Kimmich", "Trent Alexander-Arnold", "Andrew Robertson", "Jadon Sancho", "Erling Haaland", "Bruno Fernandes", "João Félix", "Thiago Silva", "N'Golo Kanté", "Pierre-Emerick Aubameyang", "Zlatan Ibrahimović", "Sergio Agüero", "Philippe Coutinho", "Marco Verratti", "Ciro Immobile", "Kalidou Koulibaly", "Leonardo Bonucci", "Giorgio Chiellini", "Frenkie de Jong", "Matthijs de Ligt", "Hakim Ziyech", "Christian Pulisic", "Kai Havertz"],
        comidas = ["Pizza", "Hambúrguer", "Sushi", "Tacos", "Lasagna", "Paella", "Feijoada", "Churrasco", "Ceviche", "Falafel", "Ramen", "Pad Thai", "Burrito", "Empanadas", "Gnocchi", "Pão de Queijo", "Brigadeiro", "Coxinha", "Acarajé", "Moqueca", "Risotto", "Quiche","Tiramisu", "Gelato","Croissant", "Dim Sum","Bibimbap", "Kebab","Shawarma", "Moussaka","Pierogi", "Samosa","Biryani", "Pho","Goulash", "Poutine","Miso Soup", "Kimchi","Hummus", "Baklava", "Tandoori Chicken", "Fajitas", "Chili con Carne", "Clam Chowder", "Jambalaya", "Gumbo", "Shepherd's Pie", "Fish and Chips", "Ratatouille", "Crepes"],
        animais = ["Leão", "Tigre", "Elefante", "Girafa", "Zebra", "Cavalo", "Cachorro", "Gato", "Coelho", "Rato","Hamster", "Papagaio", "Pinguim", "Urso", "Canguru", "Rinoceronte", "Hipopótamo", "Cobra", "Jacaré", "Tartaruga","Golfinho", "Baleia", "Tubarão", "Peixe-palhaço", "Peixe-espada", "Águia", "Falcão", "Coruja", "Pato", "Ganso","Galinha", "Pavão", "Peru", "Ovelha", "Cabra", "Vaca", "Búfalo", "Porco", "Javali", "Cervo", "Raposa", "Lobo", "Guaxinim", "Esquilo", "Morcego", "Macaco", "Chimpanzé", "Gorila", "Orangotango", "Lêmure"],
        bebidas = ["Água", "Café", "Chá", "Suco de Laranja", "Suco de Maçã", "Refrigerante", "Cerveja", "Vinho", "Whisky", "Vodka","Rum", "Tequila", "Gin", "Licor", "Smoothie", "Milkshake", "Achocolatado", "Água de Coco", "Energético", "Isotônico","Limonada", "Suco de Uva", "Suco de Abacaxi", "Suco de Manga", "Suco de Maracujá", "Suco de Morango", "Suco de Melancia", "Suco de Acerola", "Suco de Goiaba", "Suco de Pêssego","Chá Verde", "Chá Preto", "Chá de Camomila", "Chá de Hortelã", "Chá de Erva-Doce", "Chá Mate", "Chá de Hibisco", "Chá de Gengibre", "Chá de Limão", "Chá de Frutas Vermelhas", "Cappuccino", "Latte", "Mocha", "Espresso", "Macchiato", "Frappuccino", "Café Gelado", "Café com Leite", "Café Americano", "Café Turco"]
    ]

let points = 0

let palavra = 0;

let letras = []

function sortearElemento(lista){
    let sorteio = Math.round(Math.random() * (lista.length - 1)) 
    let elementoSorteado = lista[sorteio]
    return elementoSorteado
}

function sortearPalavra(){
    const categoria = sortearElemento(categorias)

    if(categoria == categorias[0]){
        categoriaDica.innerHTML += " Nome"
    } else if(categoria == categorias[1]){
        categoriaDica.innerHTML += " Comida"
    } else if(categoria == categorias[2]){
        categoriaDica.innerHTML += " Animal"
    } else{
        categoriaDica.innerHTML += " Bebida"
    }

    return palavra = sortearElemento(categoria)
}

function separarLetras(){
    palavra = sortearPalavra().toLowerCase()

    for(i = 0; i < palavra.length; i++){
        letras.push(palavra.substring(i, (i + 1)))
    }

    console.log(palavra)
}

function embaralharLetras(){
    separarLetras()
    for(i = letras.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [letras[i], letras[j]] = [letras[j], letras[i]];
    }
}

function jogarLetrasNaTela(){
    embaralharLetras()

    letras.forEach((letra, i)=>{
        const item = document.createElement("li");
        item.textContent = letra
        listaDeLetras.appendChild(item)
        item.setAttribute("class", "letra")
        item.setAttribute("id", `letra${i}`)
    })
}

function validarResposta(){
    if(resposta.value == palavra) {
        listaDeLetras.style.backgroundColor = "#00FF00"
        document.body.style.setProperty("--cor-fundo-letras", "#49dd49")
        somAcerto.play()
        setTimeout(()=>{
            document.body.style.setProperty("--cor-fundo-letras", "rgb(148, 148, 185)")
            listaDeLetras.style.backgroundColor = "rgb(78, 103, 212)"
        }, 800)
        points++
        pontos.innerHTML = " " + points
    } else{
        listaDeLetras.style.backgroundColor = "#FF0000"
        mensagemDeErro.innerHTML = palavra
        mensagemDeErro.style.display = "flex"
        document.body.style.setProperty("--cor-fundo-letras", "rgb(173, 19, 19)")
        somErro.play()
        setTimeout(()=>{
            mensagemDeErro.style.display = "none"
            document.body.style.setProperty("--cor-fundo-letras", "rgb(148, 148, 185)")
            listaDeLetras.style.backgroundColor = "rgb(78, 103, 212)"
        }, 1000)
        points--
        pontos.innerHTML = " " + points
    }
    for(i = 0; i < letras.length; i++) {
        document.getElementById(`letra${i}`).remove();
    }
    resposta.focus()
    letras = []
    categoria.innerHTML = "Categoria:"
    jogarLetrasNaTela()
}

validarNome.addEventListener("click", ()=>{
    validarResposta()
    resposta.value = "";
})

jogar.addEventListener("click", ()=>{
    jogarLetrasNaTela()
    jogar.style.display = "none"
    validarNome.style.display = "block"
    resposta.style.display = "block"
    resposta.focus()
})

document.addEventListener('keydown', (event) => {
    if(event.key == "Enter" && palavra != 0){
        validarResposta()
        resposta.value = "";
    }
});