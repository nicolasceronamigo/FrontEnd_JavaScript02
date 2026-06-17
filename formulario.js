// Almacenar variable en un arreglo

// let frutas = ["Manzana", "Pera"];

// frutas.push("Naranja");

// console.log(frutas);

// let verduras = ["Apio", "Lechuga"];

// verduras.unshift("Repollo")

// console.log(verduras);

// const mensaje = document.getElementById("mensaje");
// mensaje.innerHTML = "<h1>Bienvenidos a Frontend</h1>";
// mensaje.innerHTML = `<h2> Bienvenidos a Frontend </h2>
//                     <p>Nombre: Eric </p>
//                     <p>Asignatura: Frontend </p>`;

const btnValidar = document.getElementById("btnValidar");
const contenedorErrores = document.getElementById("errores");

btnValidar.addEventListener("click", () => {
    //Limpiar contenedor
    contenedorErrores.innerHTML = "";

    //Obtener valor campo nombre
    const nombre = document.getElementById("nombre").value.trim();
    //Obtener valor campo correo
    const correo = document.getElementById("correo").value.trim();
    //Obtener valor campo carrera
    const carrera = document.getElementById("carrera").value;
    //Obtener valor campo semestre
    const semestre = document.getElementById("semestre").value;
    //Obtener valor campo promedio
    const promedio = document.getElementById("promedio").value;
    //Obtener valor campo fecha de nacimiento
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    //arreglo vacío que almacena los errores del usuario
    let errores = [];

    //Validaciones
    //Validacion nombre vacío
    if (nombre === ""){
        errores.push("Debes ingresar el nombre");
    }
    //Validacion correo vacío y patrón regex
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === ""){
        errores.push("Debes ingresar un correo electrónico");
    }else if (!regexCorreo.test(correo)){
        errores.push("El correo es inválido");
    }
    //Validacion carrera vacío
    if (carrera === ""){
        errores.push("Debes ingresar una carrera");
    }
    //Validacion semestre vacío
    if (semestre === ""){
        errores.push("Debes ingresar un semestre");
    }
    //Validacion promedio vacío
    if (promedio === ""){
        errores.push("Debes ingresar el promedio");
    }
    //Validación promedio en rango
    else if (parseFloat(promedio) < 1 || parseFloat(promedio) > 7){
        errores.push("El promedio debe estar entre 1.0 y 7.0")
    }
    //Validacion fecha nacimiento vacía
    if (fechaNacimiento === ""){
        errores.push("Debes seleccionar una fecha de nacimiento");
    }
    //Errores
    if (errores.length > 0){
        contenedorErrores.innerHTML = `
            <ul>
                ${errores.map(error => `<li>${error}</li>`).join("")}
            </ul>
        `;
        return;
    }

    //Crear un objeto
    const alumno = {
        nombre,
        correo,
        carrera,
        semestre,
        promedio,
        fechaNacimiento
    };

    //Guardar en Localstorage
    localStorage.setItem(
        "alumno", 
        JSON.stringify(alumno)
    );

    window.location.href = "perfil.html";
});