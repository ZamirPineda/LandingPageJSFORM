const formulario = document.querySelector('#formulario-contacto');
const botonEnviar = document.querySelector('.btn-enviar');

const nameContact = document.getElementsByName('name_contact')[0];
const email = document.getElementsByName('email_contact')[0];
const phone = document.getElementsByName('phone_contact')[0];
const topic = document.getElementById('topic_contact');
const commit = document.getElementsByName('commit_contact')[0];

const errorsList = document.getElementById('errors');

function showError(element, message){
    element.classList.toggle('error');
    errorsList.innerHTML += `<li>${message}</li>`;
}

function cleanErrors() {
    errorsList.innerHTML = '';
}

async function sendMail(name, email, phone, select, comment) {
    const rawResponse = await fetch('https://30kd6edtfc.execute-api.us-east-1.amazonaws.com/prod/send-email', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
});
    const content = await rawResponse.json();
    if(Object.keys(content.errors).length > 0) {
        alert('Error al enviar el correo');
    } else {
        alert('Correo enviado correctamente');
    }
}

botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    cleanErrors();
    let hasErrors = false;
    const sanitizedName = nameContact.value.trim();
    if(sanitizedName.length === 0 || sanitizedName.indexOf(' ') < 0) {
        showError(nameContact, 'Campo y nombre no debe estar vacío y contener al menos un espacio.');
        hasErrors = true;
    }
    const mailRe = /^\w+@\w+\.\w{2,7}/;
    if (!mailRe.exec(email.value)) {
        showError(email, 'El correo debe seguir un formato válido.');
        hasErrors = true;
    }
        const phoneRe = /^\+?\d{7,15}$/;
        const sanitizedPhone = phone.value.replace(' ', '')
    if (!phoneRe.exec(sanitizedPhone)){
        showError(phone, 'Número de télefono debe tener entre 7 y 15 dígitos.');
        hasErrors = true;
    }
    const sanitizedCommit = commit.value.trim();
    if(sanitizedCommit.length < 20){
        showError(commit, 'El mensaje debe contener al menos 20 caracteres de largo.');
        hasErrors = true;
    }
    if(!hasErrors) {
        sendMail(sanitizedName, email.value, sanitizedPhone, topic.selected, commit.value);
    }

});