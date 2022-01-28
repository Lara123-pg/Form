function styleValidation(id, valueText, mLeft, mTop) {
    var text = document.getElementById(`${id}`);
    text.innerHTML = `${valueText}`;
    text.style.color = '#FF0000'; 
    text.style.fontSize = '14px';
    text.style.display = 'inline';
    text.style.fontWeight = '700';
    text.style.marginLeft = `${mLeft}`;
    text.style.marginTop = `${mTop}`;
}

function changeInput(id) {
    document.getElementById(`${id}`).innerHTML = '';
}

function validation() {

    // Name
    var nameInput = document.getElementById('fName').value;
    var regexName = /[^a-zà-ú]/gi

    if(!regexName.test(nameInput) == true) {
        styleValidation('nameP', 'Preencha o nome de forma correta.', '100px', '50px');
    } else {
        changeInput('nameP');
    }

    // Email
    var emailInput = document.getElementById('email').value;
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!regexEmail.test(emailInput) == true) {
        styleValidation('emailP', 'Preencha o email de forma correta.', '100px', '50px');
    } else {
        changeInput('emailP');
    }

    // Birth date
    var dateInput = document.getElementById('bDate').value;
    if(dateInput == '') {
        styleValidation('dateP', 'Preencha sua data de nascimento', '100px', '2px');
    } else {
        changeInput('dateP');
    }

    // CPF
    function cpfCalculo(qtdNum, cpfNumber, increment) {
        var valor = cpfNumber.substr(0, qtdNum), soma2 = 0;
        for(let i = 0; i < valor.length; i++) {
            soma2 += parseInt(valor[i]) * increment;
            increment --;
        }

        return soma2;
    }

    function somaCalculo(soma) {
        var result = (soma * 10) % 11;
        return String(result);
    }

    var cpfInput = document.getElementById('cpf').value;
    var regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if(!regexCpf.test(cpfInput) == true) {
        styleValidation('cpfP', 'Preencha seu CPF de forma correta.', '100px','2px');
    } else {
        if(cpfInput != null) {
            var cpfNumber = cpfInput.replace(/\.|-/gm,'');
            var cpfN = cpfCalculo(9, cpfNumber, 10);
            var cpfN2 = cpfCalculo(10, cpfNumber, 11);

            var result1 = somaCalculo(cpfN);
            var result2 = somaCalculo(cpfN2);

            var digito1 = cpfNumber.substr(9, 1);
            var digito2 = cpfNumber.substr(10, 1);

            if(result1 == 10 || result1 == 11) {
                result1 = 0;
            } 

            if(result1 != digito1) {
                styleValidation('cpfP', 'CPF inválido', '100px','2px');
            } else {
                if(result2 == 10 || result2 == 11) {
                    result2 = 0;
                }

                if(result2 != digito2) {
                    styleValidation('cpfP', 'CPF inválido', '100px','2px');
                } else {
                    changeInput('cpfP');
                }
            }
        }
    }
    
    // Buttons Checkbox
    var checkbox = document.getElementsByName('language');
    var select = 0;
    for(let i = 0; i < checkbox.length; i++) {
        if(!checkbox[i].checked) {
            select++;
        }
    }

    if(checkbox.length == select) {
        styleValidation('checkboxP', 'Por favor, selecione alguma opção.', '60px', '2px');
    } else {
        changeInput('checkboxP');
    }
    
    // Textarea
    var bioInput = document.getElementById('textarea').value;

    if(bioInput == '') {
        styleValidation('textareaP', 'Por favor, preencha o campo acima.', '140px', '50px');
    } else {
        changeInput('textareaP');
    }
}