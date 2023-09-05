function exibirModal() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
}
function fecharModal() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}
    function aceitarTermos() {
        var checkBox = document.getElementById("aceitouTermos");
        if (checkBox.checked) {
            realizarTeste();
            fecharModal();
        } else {
            alert("Por favor, aceite os termos de uso para continuar.");
        }
    }