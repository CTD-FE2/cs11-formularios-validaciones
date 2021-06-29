# Consigna 1

Hoy vamos a contar con [este formulario](https://drive.google.com/file/d/1BkmWY-gykGvG2uX4fETbngtsBgWYxipI/view), el mismo toma algunos datos del usuario, para poder tratar la información. Una buena práctica es normalizar esos datos. En este ejercicio debemos capturar la información de los elementos del HTML y colocarlos en una estructura como la siguiente:

```javascript
{
  nombre: '',
  telefono: '',
  contrasenia: '',
  hobbies: '',
  nacionalidad: ''
}
```

# Consigna 2

Ver completa [acá](https://docs.google.com/document/d/1Q9TwzvAxLCZAaX4VH7SXSqwSVW9lKF8pFf49A024-Kc/view#heading=h.gjdgxs).

Hoy vamos a contar con [este formulario](https://drive.google.com/file/d/1BkmWY-gykGvG2uX4fETbngtsBgWYxipI/view), el mismo debe deshabilitar el botón de inscripción en el caso de que alguna regla no se cumpla. Además tenemos que indicar visualmente con color rojo si un campo tiene errores.


## Reglas

### Nombre completo

- Debe contener al menos dos palabras.
- Cada nombre o apellido debe tener más de 1 letra.
- El campo no puede superar los 150 caracteres.
- El campo es obligatorio.
- No debe contener números.

### Hobbies

- Se deben seleccionar como máximo 4 hobbies.
- No se admite la combinación de:
    - Videojuegos con cocina.
    - Guitarra con lectura.
    - Netflix con tejer.

### Paises

- El campo es obligatorio.
- Si se selecciona Argentina, el formulario muestra una excepción: "Lo sentimos, aún no estamos reclutando magos en Argentina, pero pronto llegaremos"

## A investigar

Partiendo de la actividad de la clase 12, crear los siguientes input en el form: nombre de usuario, teléfono y contraseña. Deberán validar el value de cada campo con RegEx  (expresiones regulares), teniendo en cuenta que estas son objetos de JS que, entre varios métodos disponibles, se utiliza el método test para evaluar la coincidencia entre el dato ingresado y las consignas que a continuación les pedimos:

1. Lograr que el usuario contenga un límite de 8 dígitos y al menos una mayúscula y un número.
2. Lograr que la contraseña contenga entre 10 y 15 dígitos alfanuméricos y 1 carácter especial como (*,$,&).
3. Lograr que el input del teléfono solo acepte números de 9 dígitos separados entre 2 espacios (123 456 789).