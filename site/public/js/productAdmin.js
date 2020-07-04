var editando = false;
window.addEventListener("load", function() {
    if (!editando) {
        var filas = document.querySelectorAll("#tablaProductos tr");
        filas.forEach(function(fila) {
            fila.addEventListener("click", function() {
                fila.parentNode.childNodes.forEach(function(child) {
                    if (child.nodeName == "TR") {
                        child.classList.remove('selected');
                    }
                });
                fila.classList.add('selected');
                var value = fila.querySelector('td').innerHTML;
                productID = value.trim();
                var iframe = document.getElementById('iframeDetails');
                iframe.src = `/product/admin/${productID}`;
            })
        });
    }
})

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
    document.getElementById("idProducto").value = productID;
    document.getElementById("borrarForm").action = "/product/admin?_method=DELETE"
    document.getElementById("borrarForm").submit();
}

function editar() {
    bloquearProducto();
    var iframe = document.getElementById('iframeDetails');
    iframe.src = `/product/admin/${productID}/1`;
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
}

function resizeIframe(obj) {
    obj.style.height = 0;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}