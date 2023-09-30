
    // Función para agregar un contacto al almacenamiento local
    function agregarContacto() {
        // Obtener los valores del formulario
        let id = document.getElementById("id").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let telefono = document.getElementById("telefono").value;
        let ciudad = document.getElementById("ciudad").value;
        let direccion = document.getElementById("direccion").value;

        // Crear un objeto de contacto
        let contacto = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            ciudad: ciudad,
            direccion: direccion
        };

        // Obtener la lista de contactos del almacenamiento local
        let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

        // Agregar el nuevo contacto a la lista
        contactosGuardados.push(contacto);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem("contactos", JSON.stringify(contactosGuardados));

        // Limpiar los campos del formulario
        document.getElementById("id").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("direccion").value = "";

        // Actualizar la tabla de contactos (si la tienes)
        actualizarTablaContactos();
    }

    // Función para mostrar los contactos en una tabla (puedes personalizar esto)
    function actualizarTablaContactos() {
        // Obtener la lista de contactos del almacenamiento local
        let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

        
        let tablaContactos = document.getElementById("tabla-contactos");
        tablaContactos.innerHTML = ""; // Limpiar la tabla

        for (let i = 0; i < contactosGuardados.length; i++) {
            let contacto = contactosGuardados[i];
            
        }
    }
