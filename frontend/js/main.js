// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/api/clientes")
    .then((response) => response.json())
    .then((data) => {
      // DOM -> <tbody id="table-cliente">
      const elemento = document.getElementById("table-cliente");
      for (let i = 0; i < data.length; i++) {
        //data[i], muestra en forma de array
        let cliente = data[i];
        // alt + 96
        let fila = `
                            <tr>
                            <td>${cliente.id}</td>
                            <td>${cliente.nombre}</td>
                            <td>${cliente.apellido}</td>
                            <td>${cliente.dni}</td>
                            <td>${cliente.telefono}</td>
                            <td>${cliente.direccion}</td>
                            <td> 
                                <button
                                    class="btn btn-outline-primary me-2"
                                     id="btnEditar"
                                     data-bs-toggle="modal" 
                                     data-bs-target="#modalEditarCliente"
                                     data-idcli=${cliente.id}
                                     data-nomcli=${cliente.nombre}
                                     data-apellcli=${cliente.apellido}
                                     data-dnicli=${cliente.dni}
                                     data-telfcli=${cliente.telefono}
                                     data-direcli=${cliente.direccion}
                                    >
                                    <i class="fas fa-edit"></i> Editar
                                </button>
                                <button id="btnEliminar" data-idcliente = ${cliente.id} class="btn btn-outline-danger">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </td>
                            </tr>                
                           `;
        elemento.innerHTML += fila;
      }
    });

  // DOM (document object model) Dar accion al boton de guardar cliente
  const btnSaveCliente = document.getElementById("btn-crearcliente");
  btnSaveCliente.addEventListener("click", guardarCliente);
});

// EVENTO DE CLICK EN JAVASCRIPT
//Creamos una variable que almacene el DOM de ese elemento del boton
document.addEventListener("click", function (e) {
  const btnDelete = e.target.closest("#btnEliminar");
  if (btnDelete) {
    //TRUE o 1
    alert("Eliminando...");
    const id = btnDelete.dataset.idcliente;
    //console.log(id) para en consola que ID es nada mas
    //fetch("http://localhost:8080/api/clientes/"+id, {
    fetch(`http://localhost:8080/api/clientes/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        alert("Cliente eliminado correctamente");
        location.reload(); // Recargar la página para reflejar los cambios
      } else {
        alert("Error al eliminar el cliente");
      }
    });
  }
});

// CREAMOS UN FUNCION BASICA
function guardarCliente() {
  const nombre = document.getElementById("c_nombre").value;
  const apellido = document.getElementById("c_apellido").value;
  const dni = document.getElementById("c_dni").value;
  const telefono = document.getElementById("c_telefono").value;
  const direccion = document.getElementById("c_direccion").value;
  console.log(nombre, apellido, dni, telefono, direccion);
  fetch("http://localhost:8080/api/clientes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, apellido, dni, telefono, direccion }),
  }).then((response) => {
    console.log(response); //mensaje en la consola (200 o OK)
    if (response.ok) {
      location.reload();
    } else {
      alert("Error: no se pudo guardar");
    }
  });
}

//funcion para poner los datos en el input del FORMULARIO actualizar
function llamardatos() {
  const btnEditar = e.target.closest("#btnEditar");
  const id_cli = btnEditar.dataset.idcli;
  const nom_cli = btnEditar.dataset.nomcli;
  const apell_cli = btnEditar.dataset.apellcli;
  const dni_cli = btnEditar.dataset.dnicli;
  const telf_cli = btnEditar.dataset.telfcli;
  const dire_cli = btnEditar.dataset.direcli;
  document.getElementById("c_u_nombre").value = nom_cli;
  document.getElementById("c_u_apellido").value = apell_cli;
  document.getElementById("c_u_dni").value = dni_cli;
  document.getElementById("c_u_telefono").value = telf_cli;
  document.getElementById("c_u_direccion").value = dire_cli;
}
