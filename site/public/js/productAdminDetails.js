var productID = document.getElementById('id').value;

document.getElementById("btnConfSalir").onclick = function() {
    parent.location.href = "/product/admin"
}

function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('preview-img');
        output.src = reader.result;
        var output3 = document.getElementById('imageName');
        output3.value = event.target.files[0].name;
    }

    reader.readAsDataURL(event.target.files[0]);
}

function deleteImage() {
    var output = document.getElementById('preview-img');
    output.src = "/images/imgProductos/defaultProduct.jpg";
    var output3 = document.getElementById('image');
    output3.value = null;
    var output3 = document.getElementById('imageName');
    output3.value = "deleted";
}


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('id_category')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}