
$(document).ready(function() {
    
    $('#telefone').mask('(000) 000-0000')

    $('form').validate({
        rules: { /* regras se aplicam aos inputs com propriedade nome*/
            nome: {
                required: true,
                maxlength: 60
            },
            email: {
                required: true,
                email: true,
                maxlength: 60
            },
            telefone: {
                maxlength: 15
            },
            mensagem: {
                required: true,
                maxlength: 100
            }
        },
        messages: { /* edição da mensagem para nome */
            nome: 'Please enter your name (Please enter no more than 60 characters)'
        },
        submitHandler: function(form) {
            console.log(form);
            alert('Sent!')
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