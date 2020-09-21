// Procura o botão 
document.querySelector("#add-time")
// Se clicou no botão, chama a função
.addEventListener('click', cloneField)

// Função para duplicar os horários
function cloneField() {
    // Procura o que irá duplicar e realiza a duplicação
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Busca os campos que serão limpos
    const fields = newFieldContainer.querySelectorAll('input')
    // Limpa todos os campos
    fields.forEach(function (field) {
        field.value = ""
    })
    // Procura o grupo onde irá incluir a duplicação
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}