const validacionForm = (e) => {
    e.preventDefault();
    console.log("si")
    let inputNombreForm = document.querySelector("#nombreForm");
    if (inputNombreForm.value.length == 0){
        alert("'Nombre' es un campo obligatorio");
        return false
    }
}