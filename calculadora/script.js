var display = document.getElementById('display');
var calc = document.getElementById('calc')
var historico = document.getElementById('historico')

display.textContent = 0
var historicoArray = []

function pressed(v) {
    if (display.textContent == '0') {
        display.textContent = ''
        adicionar(v)
    } else {
        adicionar(v)
    }
}

function adicionar(v) {
    display.textContent += v;
}

function calculate() {
    try {
        calculando = display.textContent
        resultado = eval(display.textContent)
        historicoArray.push(calculando + "=" + resultado)
        display.textContent = resultado;
        atualizarHistorico();
    } catch (e) {
        display.textContent = 'ERROR';
    }
}

function clearAll() {
    display.textContent = '0';
}

function backspace() {
    if (display.textContent == 0) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent == '') {
            display.textContent = '0';
        }
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        pressed(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        pressed(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key.toLowerCase() === 'c') {
        clearAll();
    } else if (key === 'Tab') {
        window.location.reload()
    }
});

function historicoMain() {
    if (calc.style.display === 'none') {
        calc.style.display = 'inline';
        historico.style.display = 'none';
    } else {
        calc.style.display = 'none';
        historico.style.display = 'inline';
        atualizarHistorico();
    }
}

function atualizarHistorico() {
    var historicoLista = document.getElementById('historico-lista');

    if (historicoArray.length === 0) {
        historicoLista.innerHTML = '<p class="text-light text-center mb-0 opacity-75">Nenhum cálculo realizado ainda</p>';
    } else {
        var html = '';
        for (var i = historicoArray.length - 1; i >= 0; i--) {
            var calculo = historicoArray[i].split('=');
            html += '<div class="bg-secondary rounded p-3 mb-2 text-light d-flex justify-content-between align-items-center">';
            html += '<span class="opacity-75">' + calculo[0] + '</span>';
            html += '<span class="fw-bold fs-5">' + calculo[1] + '</span>';
            html += '</div>';
        }
        historicoLista.innerHTML = html;
    }
}

function limparHistorico() {
    historicoArray = [];
    atualizarHistorico();
}

function aplicarEfeitoClique(botao) {
    if (botao.textContent !== 'H') {
        botao.classList.add('btn-clicked');
        setTimeout(function () {
            botao.classList.remove('btn-clicked');
        }, 1500);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var botoes = document.querySelectorAll('.btn');
    botoes.forEach(function (botao) {
        if (botao.textContent !== 'H') {
            botao.addEventListener('click', function () {
                aplicarEfeitoClique(this);
            });
        }
    });
});