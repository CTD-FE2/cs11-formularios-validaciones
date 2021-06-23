window.onload = () => {
    const form = document.querySelector("form");
    const btnEnviar = document.querySelector("button");
    const nombre = form.querySelector("#nombre");
    const contrasenia = form.querySelector("#pass");
    const telefono = form.querySelector("#tel");
    const hobbies = form.hobbies;
    const nacionalidades = form.nacionalidad;
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

        hobbies.forEach(hobbie => {
            if (hobbie.checked) {
                datos.hobbies.push(hobbie.value);
            }
        });

        nacionalidades.forEach(nacionalidad => {
            if (nacionalidad.checked) {
                datos.nacionalidad = nacionalidad.parentNode.innerText.trim();
            }
        });

        console.log(datos);
    });
};