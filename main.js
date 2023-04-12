const form = document.getElementById('form-numeros');

form.addEventListener ('submit' , function(e){
    e.preventDefault();

    const numero1 = document.getElementById('numeroA').value;
    const numero2 = document.getElementById
    ('numeroB').value;

    const mensagemMencao = `Os números são válidos!`
    const mensagemError = `Inválido! Digite um número maior que o A.`

    if (numero1 < numero2){

        const containerMensagem = document.querySelector('.sucesso');
        containerMensagem.innerHTML = mensagemMencao;
        containerMensagem.style.display = 'block';

        
    } else {

        const ContainermensagemError = document.querySelector('.error');
        ContainermensagemError.innerHTML = mensagemError;
        ContainermensagemError.style.display = 'block';

    }

})