window.onload = () => {
    const form = document.forms.inscripcion;
    const btnEnviar = document.querySelector("button");
    const nombre = form.nombre;
    const contrasenia = form.pass;
    const telefono = form.tel;
    const hobbies = Array.from(form.hobbies);
    const nacionalidades = Array.from(form.nacionalidad);
    const datos = {
        nombreCompleto: null,
        contrasenia: null,
        telefono: null,
        hobbies: [],
        nacionalidad: [],
    }
    
    nombre.addEventListener("keyup", () => {
        if (nombre.value === "") {
            btnEnviar.disabled = true;
        } else {
            btnEnviar.disabled = false;
            datos.nombreCompleto = nombre.value.trim().toLowerCase();
        }
    });

    contrasenia.addEventListener("keyup", () => {
        if (contrasenia.value === "") {
            btnEnviar.disabled = true;
        } else {
            btnEnviar.disabled = false;
            datos.contrasenia = contrasenia.value.toLowerCase();
        }
    });

    telefono.addEventListener("keyup", () => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
        datos.telefono = telefono.value.trim();
        btnEnviar.enabled = regex.test(telefono.value);
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        datos.hobbies = hobbies.filter(hobbie => hobbie.checked).map(hobbie => hobbie.value);
        datos.nacionalidad = nacionalidades.find(nacionalidad => nacionalidad.checked).value;

        console.log(datos);
    });
};