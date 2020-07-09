var editando = false;

window.addEventListener("load", function() {
    if (!editando) {
        var filas = document.querySelectorAll("#tablaProductos tr.filaProducto");
        filas.forEach(function(fila) {
            fila.addEventListener("click", seleccionarFila, false);
        })
    }
})

function seleccionarFila() {
    this.parentNode.childNodes.forEach(function(child) {
        if (child.nodeName == "TR") {
            child.classList.remove('selected');
        }
    });
    this.classList.add('selected');
    var value = this.querySelector('td').innerHTML;
    productID = value.trim();
    var iframe = document.getElementById('iframeDetails');
    iframe.src = `/product/admin/${productID}`;
}

function buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablaProductos");
    tr = table.getElementsByTagName("tr");

    // Revisa por todas las filas y esconde las que no cumplen con la búsqueda
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function borrar() {
    if (productID) {
        document.getElementById("idProducto").value = productID;
        document.getElementById("borrarForm").action = "/product/admin?_method=DELETE"
        document.getElementById("borrarForm").submit();
    }
}

function editar() {
    if (productID) {
        bloquearProducto();
        var iframe = document.getElementById('iframeDetails');
        iframe.src = `/product/admin/${productID}/1`;
    }
}

function crear() {
    bloquearProducto();
    var iframe = document.getElementById('iframeDetails');
    iframe.src = `/product/admin/0/2`;
}

function bloquearProducto() {
    editando = true;
    var btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.style.display = 'none';
    var btnBorrar = document.getElementById('btnBorrar');
    btnBorrar.style.display = 'none';
    var btnEditar = document.getElementById('btnEditar');
    btnEditar.style.display = 'none';
    var searchInput = document.getElementById('searchInput');
    searchInput.disabled = true;
    var filas = document.querySelectorAll("#tablaProductos tr");
    filas.forEach(function(fila) {
        if (fila.removeEventListener) { // For all major browsers, except IE 8 and earlier
            fila.removeEventListener("click", seleccionarFila);
        } else if (fila.detachEvent) { // For IE 8 and earlier versions
            fila.detachEvent("click", seleccionarFila);
        }
    });
}

function resizeIframe(obj) {
    obj.style.height = 0;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}