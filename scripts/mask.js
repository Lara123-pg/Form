function maskCpf() {
    var cpfInput = document.getElementById('cpf');
    if(cpfInput.value.length == 3 || cpfInput.value.length == 7) {
        cpfInput.value += '.'
    } else if(cpfInput.value.length == 11) {
        cpfInput.value += '-'
    }
    

}