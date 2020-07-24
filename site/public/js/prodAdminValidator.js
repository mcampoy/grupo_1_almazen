addEventListener('load', function() {


    let formEdit = document.getElementById('productEdit');
    formEdit.addEventListener('submit', function(ebe) {


        // VALIDACIÓN DEL CAMPO NOMBRE DE PRODUCTO
        let nameProduct = document.getElementById('name');
        let namePContent = nameProduct.value;
        let namePLength = namePContent.length >= 5 ? true : false;
        let emptyNameP = document.getElementById('emptyNameEdit');
        let invalidName = document.getElementById('invalidNameEdit');

        if (namePContent == '') {
            ebe.preventDefault();
            emptyNameP.innerHTML = '<p>' + 'Ingresá el nombre del producto' + '</p>';
            nameProduct.style.border = "1px solid #CF664F";
        } else {
            emptyNameP.innerHTML = '';
            nameProduct.style.border = "1px solid #ced4da";
        }

        if (namePContent != '' && !namePLength) {
            ebe.preventDefault();
            invalidName.innerHTML = '<p>' + 'Debe tener al menos 5 caracteres' + '</p>';
            nameProduct.style.border = "1px solid #CF664F";
        } else {
            invalidName.innerHTML = ''
            nameProduct.style.border = "1px solid #ced4da";
        }


        // VALIDACIÓN DEL CAMPO CÓDIGO DE PRODUCTO
        let codeProduct = document.getElementById('code');
        let codePContent = codeProduct.value;
        let codePLength = (codePContent.length >= 1 && codePContent.length <= 10) ? true : false;
        let emptyCodeP = document.getElementById('emptyCodeEdit');
        let invalidCode = document.getElementById('invalidCodeEdit');

        if (codePContent == '') {
            ebe.preventDefault();
            emptyCodeP.innerHTML = '<p>' + 'Ingresá el código del producto' + '</p>';
            codeProduct.style.border = "1px solid #CF664F";
        } else {
            emptyCodeP.innerHTML = '';
            codeProduct.style.border = "1px solid #ced4da";
        }

        if (codePContent != '' && !codePLength) {
            ebe.preventDefault();
            invalidCode.innerHTML = '<p>' + 'Debe tener entre 1 y 10 caracteres' + '</p>';
            codeProduct.style.border = "1px solid #CF664F";
        } else {
            invalidCode.innerHTML = ''
            codeProduct.style.border = "1px solid #ced4da";
        }




        // VALIDACIÓN DEL CAMPO DESCRIPCIÓN BREVE DE PRODUCTO
        let shortDes = document.getElementById('description_short');
        let contentSD = shortDes.value;
        let SDLength = contentSD.length >= 20 ? true : false;
        let emptySD = document.getElementById('emptyshortDes');
        let invalidSD = document.getElementById('invalidshortDes');

        if (contentSD == '') {
            ebe.preventDefault();
            emptySD.innerHTML = '<p>' + 'Ingresá una descripción breve' + '</p>';
            shortDes.style.border = "1px solid #CF664F";
        } else {
            emptySD.innerHTML = '';
            shortDes.style.border = "1px solid #ced4da";
        }

        if (contentSD != '' && !SDLength) {
            ebe.preventDefault();
            invalidSD.innerHTML = '<p>' + 'Debe tener entre 20 y 150 caracteres' + '</p>';
            shortDes.style.border = "1px solid #CF664F";
        } else {
            invalidSD.innerHTML = ''
            shortDes.style.border = "1px solid #ced4da";
        }


        // VALIDACIÓN DEL CAMPO DESCRIPCIÓN COMPLETA DE PRODUCTO
        let description = document.getElementById('description');
        let descriptionContent = description.value;
        let descriptionLength = descriptionContent.length >= 20 ? true : false;
        let emptyDescription = document.getElementById('emptyDescription');
        let invalidDescription = document.getElementById('invalidDescription');

        if (descriptionContent == '') {
            ebe.preventDefault();
            emptyDescription.innerHTML = '<p>' + 'Ingresá una descripción breve' + '</p>';
            description.style.border = "1px solid #CF664F";
        } else {
            emptyDescription.innerHTML = '';
            description.style.border = "1px solid #ced4da";
        }

        if (descriptionContent != '' && !descriptionLength) {
            ebe.preventDefault();
            invalidDescription.innerHTML = '<p>' + 'Debe tener entre 20 y 500 caracteres' + '</p>';
            description.style.border = "1px solid #CF664F";
        } else {
            invalidDescription.innerHTML = ''
            description.style.border = "1px solid #ced4da";
        }

        // VALIDACIÓN DE LA IMAGEN DE PRODUCTO
        // let img = document.querySelector('image');
        let img = document.getElementById('image');
        let imgContent = img.value;
        extensionImg = (imgContent.substring(imgContent.lastIndexOf("."))).toLowerCase();
        //let emptyImg = document.querySelector('div.emptyImg');
        let invalidImg = document.getElementById('invalidImg');

        // if (imgContent == '') {
        //     event.preventDefault();
        //     emptyImg.innerHTML = "<p>" + 'Falta imagen de producto' + '</p>';
        // } else {
        //     emptyImg.innerHTML = '';
        // }

        if (imgContent != '' && extensionImg != '.jpg' && extensionImg != '.png' && extensionImg != '.jpeg' && extensionImg != '.gif') {
            ebe.preventDefault();
            invalidImg.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' + '</p>';
        } else {
            invalidImg.innerHTML = "";
        }
    })


})