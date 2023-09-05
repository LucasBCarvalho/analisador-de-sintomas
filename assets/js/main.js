function realizarTeste() {
    var checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    var selectedSymptoms = [];

    for (var i = 0; i < checkboxes.length; i++) {
        selectedSymptoms.push(parseInt(checkboxes[i].value));
    }

    var pontuacoes = {
        "AIDS": calcularPontuacaoAIDS(selectedSymptoms),
        "Tuberculose": calcularPontuacaoTuberculose(selectedSymptoms),
        "Malária": calcularPontuacaoMalaria(selectedSymptoms),
        "Doenças Tropicais Negligenciadas": calcularPontuacaoDoencasTropicaisNegligenciadas(selectedSymptoms),
        "Hepatite": calcularPontuacaoHepatite(selectedSymptoms),
        "Doenças Transmitidas pela Água e Outras Doenças Transmissíveis": calcularPontuacaoDoencasTransmitidasAgua(selectedSymptoms)
    };

    var maiorPontuacao = 0;
    var doencaComMaiorPontuacao = "";

    for (var doenca in pontuacoes) {
        if (pontuacoes[doenca] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[doenca];
            doencaComMaiorPontuacao = doenca;
        }
    }

    var resultado = "Com base nos sintomas relatados, você pode estar com a seguinte condição:\n\n";

    if (doencaComMaiorPontuacao !== "") {
        resultado += doencaComMaiorPontuacao + "<br><br>";
        resultado += "<p>" + getExplicacaoDaDoenca(doencaComMaiorPontuacao) + "</p>";
    } else {
        resultado += "Nenhuma condição identificada com base nos sintomas selecionados.<br>";
    }

    var resultadoContainer = document.getElementById("resultado");
    resultadoContainer.innerHTML = resultado;
}

// Funções de cálculo de pontuação para cada doença (sinta-se à vontade para ajustar as pontuações conforme necessário)

// Função genérica para calcular a pontuação com base nos sintomas selecionados
function calcularPontuacao(selectedSymptoms, symptomsToCheck) {
    var pontos = 0;
    for (var i = 0; i < symptomsToCheck.length; i++) {
        if (selectedSymptoms.includes(symptomsToCheck[i])) {
            pontos += 5;
        }
    }
    return pontos;
}

// Funções específicas para cada doença
function calcularPontuacaoAIDS(selectedSymptoms) {
    var symptomsToCheck = [1, 2, 3, 4, 5, 6, 7, 8];
    return calcularPontuacao(selectedSymptoms, symptomsToCheck);
}

function calcularPontuacaoTuberculose(selectedSymptoms) {
    var symptomsToCheck = [1,2,3,7,9, 14, 15];
    return calcularPontuacao(selectedSymptoms, symptomsToCheck);
}

function calcularPontuacaoMalaria(selectedSymptoms) {
    var symptomsToCheck = [2,3,17,18,19, 21, 22];
    return calcularPontuacao(selectedSymptoms, symptomsToCheck);
}

function calcularPontuacaoDoencasTropicaisNegligenciadas(selectedSymptoms) {
    var symptomsToCheck = [2,24,25,26, 27, 28];
    return calcularPontuacao(selectedSymptoms, symptomsToCheck);
}

function calcularPontuacaoHepatite(selectedSymptoms) {
    var symptomsToCheck = [2,19,21,29, 33, 34];
    return calcularPontuacao(selectedSymptoms, symptomsToCheck);
}

function calcularPontuacaoDoencasTransmitidasAgua(selectedSymptoms) {
    var symptomsToCheck = [2,35, 36, 38, 39];
    return calcularPontuacao(selectedSymptoms, symptomsToCheck);
}



// Função para obter a explicação da doença

function getExplicacaoDaDoenca(doenca) {
    switch (doenca) {
        case "AIDS":
            return getExplicacaoAIDS();
        case "Tuberculose":
            return getExplicacaoTuberculose();
        case "Malária":
            return getExplicacaoMalaria();
        case "Doenças Tropicais Negligenciadas":
            return getExplicacaoDoencasTropicaisNegligenciadas();
        case "Hepatite":
            return getExplicacaoHepatite();
        case "Doenças Transmitidas pela Água e Outras Doenças Transmissíveis":
            return getExplicacaoDoencasTransmitidasAgua();
        default:
            return "";
    }
}

// Funções de explicação para cada doença (atualize conforme necessário)

function getExplicacaoAIDS() {
    return "" +
        "Os Sintomas principais da AIDS são:<br>" +
        "<br>" +
        "- Perda de peso inexplicável<br>" +
        "- Febre<br>" +
        "- Fadiga extrema<br>" +
        "- Infecções recorrentes<br>" +
        "- Tosse seca prolongada<br>" +
        "- Diarreia crônica<br>" +
        "- Suores noturnos<br>" +
        "- Feridas na boca ou genitais<br>";
}

function getExplicacaoTuberculose() {
    return "Os Sintomas principais da Tuberculose são:<br>" +
        "<br>" +
        "- Tosse persistente por mais de duas semanas<br>" +
        "- Febre<br>" +
        "- Perda de peso inexplicável<br>" +
        "- Fadiga extrema<br>" +
        "- Sudorese noturna<br>" +
        "- Dor no peito<br>" +
        "- Falta de ar<br>";
}

function getExplicacaoMalaria() {
    return "Os Sintomas principais da Malária são:<br>" +
        "<br>" + 
        "- Febre alta<br>" +
        "- Calafrios intensos<br>" +
        "- Suores intensos<br>" +
        "- Dores musculares e nas articulações<br>" +
        "- Fadiga<br>" +
        "- Náuseas e vômitos<br>" +
        "- Anemia<br>";
}

function getExplicacaoDoencasTropicaisNegligenciadas() {
    return "Os Sintomas principais das Doenças Tropicais Negligenciadas são:<br>" +
        "<br>" +
        "- Febre<br>" +
        "- Lesões na pele<br>" +
        "- Ulcerações<br>" +
        "- Dor nas articulações" + 
        "- Inchaço<br>" +
        "- Fraqueza geral<br>";
}

function getExplicacaoHepatite() {
    return "Os Sintomas principais da Hepatite são:<br>" +
        "<br>" +
        "- Fadiga intensa<br>" +
        "- Febre<br>" +
        "- Dores musculares e nas articulações<br>" +
        "- Náuseas e vômitos<br>" +
        "- Perda de apetite<br>" +
        "- Icterícia (pele e olhos amarelados)<br>";
}

function getExplicacaoDoencasTransmitidasAgua() {
    return "Os Sintomas principais das Doenças Transmitidas pela Água e Outras Doenças Transmissíveis são:<br>" +
        "<br>" +
        "- Febre<br>" +
        "- Diarreia intensa<br>" +
        "- Vômitos<br>" +
        "- Desidratação<br>" +
        "- Fraqueza<br>";
}
