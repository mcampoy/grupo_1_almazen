addEventListener('load', function () {

    console.log('DOM cargado')

    // VALIDACIÓN DEL LOGIN (VISTA)
    let form = document.getElementById('loginForm');
    form.addEventListener('submit', function (e) {

        // VALIDACIÓN DEL CAMPO EMAIL DE LA VISTA LOGIN

        let emailLog = document.getElementById('emailLog');
        let emailContent = emailLog.value;
        let arroba = emailContent.includes('@');
        let emailLength = emailContent.length >= 6 ? true : false;
        // let extension = emailContent.includes('.')
        let invalidEmail = form.querySelector('div.emptyEmail');
        let iconoEmail = form.querySelector('i#emailIconLog');
        let emptyEmail = document.querySelector('div.emptyEmail');

        if (emailContent == '' || !emailLength) {
            e.preventDefault();
            emptyEmail.innerHTML = '<p>' + 'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
            iconoEmail.style.backgroundColor = "#CF664F";
            emailLog.style.border = "1px solid #CF664F";
        } else {
            emptyEmail.innerHTML = '';
            iconoEmail.style.backgroundColor = "#6FCF97";
            emailLog.style.border = "1px solid #ced4da";
        }

        if (emailContent != '' && !arroba) {
            e.preventDefault();
            invalidEmail.innerHTML = "<p>" + 'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' + '<span style="font-weight: 600">' + emailContent + '</span>' + ' no la incluye.' + '</p>';
            iconoEmail.style.backgroundColor = "#CF664F";
            emailLog.style.border = "1px solid #CF664F";
        }
    
        // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA LOGIN
        let passLog = document.getElementById('passwordLog');
        let passLogContent = passLog.value;
        let emptyPass = form.querySelector('div.emptyPassLog');
        let invalidPass = form.querySelector('div.invalidPassLog');
        let passLength = passLogContent.length >= 4 ? true : false;
        let iconoKey = form.querySelector('i#keyIconLog');

        if (passLogContent == '') {
            e.preventDefault();
            emptyPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
            iconoKey.style.backgroundColor = "#CF664F";
            passLog.style.border = "1px solid #CF664F";
        } else {
            emptyPass.innerHTML = '';
            iconoKey.style.backgroundColor = "#6FCF97";
            passLog.style.border = "1px solid #ced4da";
        }

        if(passLogContent != '' && !passLength){
            e.preventDefault();
            invalidPass .innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita. Debe tener al menos 4 caracteres' + '</p>';
            iconoKey.style.backgroundColor = "#CF664F";
            passLog.style.border = "1px solid #CF664F";
        } else {
            invalidPass.innerHTML = '';
            passLog.style.border = "1px solid #ced4da";
        }
    })
})