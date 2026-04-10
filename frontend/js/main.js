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
                                <button class="btn btn-outline-primary me-2">
                                    <i class="fas fa-edit"></i> Editar
                                </button>
                                <button class="btn btn-outline-danger">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </td>
                            </tr>                
                           `;
        elemento.innerHTML += fila;

        //console.log(cliente) //Muestro los resultados en consola
      }
    });
});
