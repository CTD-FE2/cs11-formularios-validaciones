class Persona {
    #nombreCompleto;
    #contrasenia;
    #telefono;
    #hobbies;
    #nacionalidad;

    constructor() {
        this.#nombreCompleto = null;
        this.#contrasenia = null;
        this.#telefono = null;
        this.#hobbies = [];
        this.#nacionalidad = null;
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

    getNombreCompleto() {
        if (this.nombreCompleto !== null)
            return this.nombreCompleto;
    }

    getContrasenia() {
        if (this.contrasenia !== null)
            return this.contrasenia;
    }

    getTelefono() {
        if (this.telefono !== null)
            return this.telefono;
    }

    getNacionalidad() {
        if (this.nacionalidad !== null)
            return this.nacionalidad;
    }

    getHobbies() {
        if (this.hobbies.length > 0)
            return this.hobbies;
    }

    agregarHobbies(h) {
        const esValido = this.#validarAgregadoHobbies(h);
        if (esValido) {
            this.hobbies = this.#filtrarHobbies(h);
        }
        return esValido;
    }

    #filtrarHobbies(h) {
        return h.filter(hobbie => hobbie.checked).map(hobbie => hobbie.value);
    }

    #validarAgregadoHobbies(hobbies) {
        const filtrados = this.#filtrarHobbies(hobbies);
        const hayVideojuegos = filtrados.find(h => h === "videojuegos") !== undefined;
        const hayCocina = filtrados.find(h => h === "cocina") !== undefined;
        const hayGuitarra = filtrados.find(h => h === "guitarra") !== undefined;
        const hayLectura = filtrados.find(h => h === "lectura") !== undefined;
        const hayNetflix = filtrados.find(h => h === "netflix") !== undefined;
        const hayTejer = filtrados.find(h => h === "tejer") !== undefined;
        return (filtrados.length <= 4) && !(hayVideojuegos && hayCocina) && !(hayGuitarra && hayLectura) && !(hayNetflix && hayTejer);
    }

    agregarNacionalidad(n) {
        const esValida = this.#validarNacionalidad(n);
        if (esValida) {
            this.nacionalidad = this.#encontrarNacionalidad(n).value;
        }
        return esValida;
    }

    #encontrarNacionalidad(nacionalidades) {
        return nacionalidades.find(nacionalidad => nacionalidad.checked);
    }

    #validarNacionalidad(n) {
        return this.#encontrarNacionalidad(n) !== undefined;
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