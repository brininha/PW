function testar() {
    //A função dessa função é verificar se todos os campos foram preenchidos.
    var qtdePessoas, codQuarto, quarto, precoU, dias, extra = 0, precoT, nome;

    nome = document.getElementById('nome').value;
    codQuarto = document.reservaForm.codQuarto.selectedIndex;
    qtdePessoas = (document.reservaForm.codAdulto.selectedIndex + 1) + document.reservaForm.codCrianca.selectedIndex;
    dias = parseInt(document.getElementById('codDias').value);

    if (qtdePessoas > 4) {
        alert("O quarto selecionado não pode hospedar mais de 4 pessoas. Altere a quantidade.")
    }

    if (nome.length != 0 && codQuarto != 0 && dias != 0 && dias != NaN && qtdePessoas < 4) {
        reservar();
    }
}

function reservar() {
    //Se todas as condições forem atendidas, essa função será ativada e os preços serão atribuídos às opções selecionadas.
    var qtdePessoas, codQuarto, quarto, precoU, dias, extra = 0, precoT, codPromo, desconto, nome;

    codQuarto = document.reservaForm.codQuarto.selectedIndex;
    //Aqui temos a definição do preço do quarto escolhido.
    switch (codQuarto) {
        case 1: precoU = 125, quarto = "Suíte Coral";
        break;
        case 2: precoU = 180.50, quarto = "Suíte Conchas";
        break;
        case 3: precoU = 220.80, quarto = "Suíte Mar";
        break;
        case 4: precoU = 251.50, quarto = "Suíte Algas";
        break;
        case 5: precoU = 301.10, quarto = "Suíte Pérolas";
        break;
    }
    //Aqui temos a quantidade de pessoas
    qtdePessoas = (document.reservaForm.codAdulto.selectedIndex + 1) + document.reservaForm.codCrianca.selectedIndex;   

    //Aqui temos a quantidade de dias
    dias = parseInt(document.getElementById('codDias').value);

    //Aqui temos as despesas extras
    var animal = document.getElementById('extra1');
    var caixinha = document.getElementById('extra2');

    if (animal.checked) {
        extra = 100;
    } 
    
    if (caixinha.checked) {
        extra += 20;
    }

    

    //Aqui temos o cálculo final do valor total
    precoT = ((dias * precoU) + extra);
    if (precoT < 0) {
        precoT = 0;
    }

    //Aqui temos o nome do cliente
    nome = document.getElementById('nome').value;

    //Aqui temos o código promocional
    codPromo = document.getElementById('desconto').value;

    if (codPromo === "VANESSAEALINELINDAS123" || codPromo === "MERECEMB123" || codPromo === "HOHOHO123") {
        alert("Uauu " + nome + ", você descobriu um segredo! Aproveite o desconto do código promocional.")
        if (codPromo === "VANESSAEALINELINDAS123") {
            desconto = precoT * 0.3;
        } else if (codPromo === "MERECEMB123") {
            desconto = precoT * 0.2;
        } else {
            desconto = precoT * 0.1;
        }
    } else {
        desconto = 0;
    }

    //Aqui temos o cálculo final do valor total com desconto
    precoT = ((dias * precoU) + extra - desconto);
    if (precoT < 0) {
        precoT = 0;
    }

    //Aqui temos o resumo da compra
    document.getElementById('formularioArea').innerHTML = "";
    document.getElementById('dadosArea').innerHTML = "<br><p>Olá <b>" + nome + "</b>, veja os dados da sua hospedagem:</p><br><b>Acomodação reservada</b>: " + quarto + " (R$ " + precoU.toFixed(2) + " p/ dia)" + "<br><b>Duração da estadia</b>: " + dias + " dia(s)<br><b>Quantidade de pessoas</b>: " + qtdePessoas + " hóspede(s)" + "<br><b>Despesa extra</b>: R$ " + extra.toFixed(2) + "<br><b>Desconto do código promocional</b>: R$ " + desconto.toFixed(2) + "<br><b>Total</b>: R$ " + precoT.toFixed(2) + "<br><br><br>";
}