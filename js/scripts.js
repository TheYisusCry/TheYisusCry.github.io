// Funcionamiento de los botones
document.addEventListener("DOMContentLoaded", function() {
    const btnMensaje = document.getElementById("btnMensaje");

    if (btnMensaje) {
        let mensaje;

        switch (window.location.pathname) {
            case "/x100pre.html":
                mensaje = "¡Este es su primer álbum! y para muchos el mejor, disfrutalo.";
                break;
            case "/Oasis.html":
                mensaje = "Un álbum colaborativo muy bueno, corto pero intenso";
                break;
            case "/YHLQMDLG.html":
                mensaje = "Un álbum que sin duda marcó una etapa de muchos de nosotros y que debido a una pandemia no pudimos disfrutar al 100";
                break;
            case "/Las-que-no-iban-a-salir.html":
                mensaje = "Su nombre lo dice todo, es un regalo basicamente";
                break;
            case "/El-ultimo-tour-del-mundo.html":
                mensaje = "Su mejor albúm y el que diga lo contrario no tiene buen gusto";
                break;
            case "/Un-verano-sin-ti.html":
                mensaje = "Su álbum mas exitoso hasta hoy, muy amado y odiado";
                break;
            case "/nadie-sabe-lo-que-va-a-pasar-mañana.html":
                mensaje = "Su álbum mas infravalorado, recibió mucho odio por las personas que odian todo lo popular";
                break;
            case "/DtMF.html":
                mensaje = "¡Su álbum mas reciente, escucharlo en orden es todo una experiencia!";
                break;
            default:
                mensaje = "Algo salió mal";
        }

        btnMensaje.addEventListener("click", function() {
            alert(mensaje);
        });
    }
});

// Función para validar formato del correo
function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Función para validar formato del telefono
function validarTelefono(telefono) {
    let regex = /^\+?\d{1,3}?[-.\s]?\d{2,4}[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
    return regex.test(telefono);
}

//Valiación e formulario
document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let comentario = document.getElementById("comentario").value.trim();
    let mensajeExito = document.getElementById("mensaje-exito");

    if (nombre === "" || correo === "" || telefono === "" || comentario === "") {
        alert("Complete todos los campos.");
        return;
    }

    if (!validarEmail(correo)) {
        alert("Ingresa un correo válido.");
        return;
    }

    if (!validarTelefono(correo)) {
        alert("Ingresa un telefono válido.");
        return;
    }

    mensajeExito.style.display = "block";

    // Recarga la página
    setTimeout(() => {
        location.reload(); 
    }, 2000);
});


