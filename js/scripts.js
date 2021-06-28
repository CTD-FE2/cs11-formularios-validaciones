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
        const partesNombre = nombre.value.trim().toLowerCase().split(" ");
        if (partesNombre.length < 2) {
            btnEnviar.disabled = true;
            nombre.classList.add("error");
        } else {
            btnEnviar.disabled = false;
            persona.setNombreCompleto(partesNombre.join(" "));
            nombre.classList.remove("error");
        }
    });

    contrasenia.addEventListener("keyup", () => {
        if (contrasenia.value === "") {
            btnEnviar.disabled = true;
            contrasenia.classList.add("error");
        } else {
            btnEnviar.disabled = false;
            persona.setContrasenia(contrasenia.value.toLowerCase());
            contrasenia.classList.remove("error");
        }
    });

    telefono.addEventListener("keyup", () => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
        if (regex.test(telefono.value)) {
            persona.setTelefono(telefono.value.trim());
            btnEnviar.enabled = true;
            telefono.classList.remove("error");
        } else {
            btnEnviar.enabled = false;
            telefono.classList.add("error");
        }
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        let sePudoAgregarHobbies = persona.agregarHobbies(hobbies);
        if (!sePudoAgregarHobbies) {
            alert("No puede seleccionar más de 4 hobbies");
        } else if (persona.agregarNacionalidad(nacionalidades)) {
            persona.mostrarDatos();
        } else {
            alert("Tiene que seleccionar una nacionalidad");
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
        const valoresHobbies = hobbies.filter(hobbie => hobbie.checked).map(hobbie => hobbie.value);
        if (valoresHobbies.length > 4) {
            sePudoAgregarHobbies = false;
        } else {
            this.hobbies = valoresHobbies;
        }
        return sePudoAgregarHobbies;
    }

    agregarNacionalidad(nacionalidades) {
        let sePudoAgregarNacionalidad = true;
        const nacionalidad = nacionalidades.find(nacionalidad => nacionalidad.checked);
        if (nacionalidad !== undefined) {
            this.nacionalidad = nacionalidad.value;
        } else {
            sePudoAgregarNacionalidad = false;
        }
        return sePudoAgregarNacionalidad;
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