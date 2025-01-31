const form = document.getElementById('formAluno')

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Estudante cadastrado com sucesso!')
        form.submit(); 
    })