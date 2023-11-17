
$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: { /* regras se aplicam aos inputs com propriedade nome*/
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
            }
        },
        messages: { /* edição da mensagem para nome */
            nome: 'Please insert your name'
        },
        submitHandler: function(form) {
            console.log(form);
            alert('Sent successfully!')
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`There are ${camposIncorretos} incorrect fields`)
            }
        }
    })
    
    const typeWriter = document.getElementById('typewriter-text');
    const text = 'Enlightening Businesses, Generating Growth.';

    typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length)
})