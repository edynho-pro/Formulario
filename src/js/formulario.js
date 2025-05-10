document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario');
    const campos = formulario.querySelectorAll('input, textarea');

    campos.forEach(campo => {
        campo.addEventListener('input', () => {
            const mensagemErro = campo.nextElementSibling;
            if (campo.value.trim() === '') {
                campo.classList.remove('sucesso');
                campo.classList.add('erro');
                mensagemErro.style.display = 'block';
            } else {
                campo.classList.remove('erro');
                campo.classList.add('sucesso');
                mensagemErro.style.display = 'none';
            }
        });
    });

    formulario.addEventListener('submit', (e) => {

        let valido = true;

        campos.forEach(campo => {
            const mensagemErro = campo.nextElementSibling;
            if (campo.value.trim() === '') {
                campo.classList.add('erro');
                campo.classList.remove('sucesso');
                mensagemErro.style.display = 'block';
                valido = false;
            }
        });

        if (!valido) {
            e.preventDefault();
        } else {
            alert('Formulário enviado com sucesso!');
            formulario.reset();

            campos.forEach(campo => {
                campo.classList.remove('erro', 'sucesso');
                const mensagemErro = campo.nextElementSibling;
                mensagemErro.style.display = 'none';
            });
        }
    });
});
