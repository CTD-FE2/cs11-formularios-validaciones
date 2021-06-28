window.onload = () => {
    const form = document.forms.inscripcion;
    const btnEnviar = document.querySelector("button");
    const nombre = form.nombre;
    const contrasenia = form.pass;
    const telefono = form.tel;
    const hobbies = Array.from(form.hobbies);
    const nacionalidades = Array.from(form.nacionalidad);
    const persona = new Persona();
    
    nombre.addEventListener("keyup", () => {
        if (nombre.value === "") {
            btnEnviar.disabled = true;
        } else {
            btnEnviar.disabled = false;
            persona.setNombreCompleto(nombre.value.trim().toLowerCase());
        }
    });

    contrasenia.addEventListener("keyup", () => {
        if (contrasenia.value === "") {
            btnEnviar.disabled = true;
        } else {
            btnEnviar.disabled = false;
            persona.setContrasenia(contrasenia.value.toLowerCase());
        }
    });

    telefono.addEventListener("keyup", () => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
        if (regex.test(telefono.value)) {
            persona.setTelefono(telefono.value.trim());
            btnEnviar.enabled = true;
        } else {
            btnEnviar.enabled = false;
        }
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        let sePudoAgregarHobbies = persona.agregarHobbies(hobbies);
        if (!sePudoAgregarHobbies) {
            alert("No puede seleccionar más de 4 hobbies");
        } else {
            persona.agregarNacionalidad(nacionalidades);
            persona.mostrarDatos();
        }
    });
};

class Persona {
    #nombreCompleto;
    #contrasenia;
    #telefono;
    #hobbies;
    #nacionalidad;

    constructor() {
        this.nombreCompleto = null;
        this.contrasenia = null;
        this.telefono = null;
        this.hobbies = [];
        this.nacionalidad = null;
    }

    setNombreCompleto(nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    setContrasenia(contrasenia) {
        this.contrasenia = contrasenia;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    agregarHobbies(hobbies) {
        let sePudoAgregarHobbies = true;
        this.hobbies = hobbies.filter(hobbie => hobbie.checked).map(hobbie => hobbie.value);
        if (this.hobbies.length > 4) {
            sePudoAgregarHobbies = false;
        }
        return sePudoAgregarHobbies;
    }

    agregarNacionalidad(nacionalidades) {
        this.nacionalidad = nacionalidades.find(nacionalidad => nacionalidad.checked).value;
    }

    mostrarDatos() {
        console.log("Nombre:\t\t\t" + this.nombreCompleto);
        console.log("Contraseña:\t\t" + this.contrasenia);
        console.log("Teléfono:\t\t" + this.telefono);
        console.log("Hobbies:\t\t");
        this.hobbies.forEach(hobbie => console.log("\t- " + hobbie));
        console.log("Nacionalidad:\t" + this.nacionalidad);
    }
}