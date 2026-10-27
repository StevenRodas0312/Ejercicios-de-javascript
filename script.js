let boton = document.getElementById("saludar");
boton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").ariaValueMax;

    if(nombre.trim()===""){
        document.getElementById("resultado").textContent =
        "Por favor, escribe tu nombre,";
    }else{
        document.getElementById("resultado").textContent =
        "Hola,"+ nombre + "!Bienbenido a la programacion.";
    }
});