addEventListener('load', function () {

    // VALIDACIÓN DEL REGISTRO (VISTA)

    let registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function (event) {


        // VALIDACIÓN CAMPO EMAIL DE LA VISTA REGISTRO
        let nameReg = document.querySelector('input#nameReg');
        let nameRegContent = nameReg.value;
        let emptyName = document.querySelector('div.emptyName');

        if (nameRegContent = '' || nameRegContent.length < 2) {
            event.preventDefault();
            emptyName.innerHTML = '<p>' + 'Por favor, ingresá tu nombre. Debe tener al menos dos caracteres' + '</p>';
            nameReg.style.border = "1px solid #CF664F";
        } else {
            emptyName.innerHTML = '';
            nameReg.style.border = "1px solid #ced4da";
        }

        // VALIDACIÓN CAMPO EMAiL DE LA VISTA REGISTRO
        let emailReg = document.getElementById('emailReg');
        let emailRegContent = emailReg.value;
        let arrobaReg = emailRegContent.includes('@');
        let emailRegLength = emailRegContent.length >= 6 ? true : false;
        let invalidRegEmail = document.querySelector('div.emptyRegEmail');
        let emptyRegEmail = document.querySelector('div.emptyRegEmail');

        if (emailRegContent == '' || !emailRegLength) {
            event.preventDefault();
            emptyRegEmail.innerHTML = '<p>' + 'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
            emailReg.style.border = "1px solid #CF664F";
        } else {
            emptyRegEmail.innerHTML = '';
            emailReg.style.border = "1px solid #ced4da";
        }

        if (emailRegContent != '' && !arrobaReg) {
            event.preventDefault();
            invalidRegEmail.innerHTML = "<p>" + 'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' + '<span style="font-weight: 600">' + emailRegContent + '</span>' + ' no la incluye.' + '</p>';
            emailReg.style.border = "1px solid #CF664F";
        }

        // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA REGISTRO
        let passReg = document.getElementById('passwordReg');
        let passRegContent = passReg.value;
        let emptyRegPass = registerForm.querySelector('div.emptyPassReg');
        let invalidRegPass = registerForm.querySelector('div.invalidPassReg');
        let passRegLength = passRegContent.length >= 4 ? true : false;

        if (passRegContent == '') {
            event.preventDefault();
            emptyRegPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
            passReg.style.border = "1px solid #CF664F";
        } else {
            emptyRegPass.innerHTML = '';
            passReg.style.border = "1px solid #ced4da";
        }

        if (passRegContent != '' && !passRegLength) {
            event.preventDefault();
            invalidRegPass.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita. Debe tener al menos 4 caracteres' + '</p>';
            passReg.style.border = "1px solid #CF664F";
        } else {
            invalidRegPass.innerHTML = '';
            passReg.style.border = "1px solid #ced4da";
        }

        // VALIDACIÓN DEL CAMPO VALIDACIÓN DE LA VISTA REGISTRO
        let validation = document.querySelector('input#validation');
        let validationContent = validation.value;
        let emptyValidation = registerForm.querySelector('div.emptyValidation');
        let invalidValidation = registerForm.querySelector('div.invalidValidation');

        if (validationContent == '') {
            event.preventDefault();
            emptyValidation.innerHTML = '<p>' + 'Por favor, repetí tu contraseña' + '</p>';
            validation.style.border = "1px solid #CF664F";
        } else {
            emptyValidation.innerHTML = '';
            validation.style.border = "1px solid #ced4da";
        }

        if (passRegContent != validationContent) {
            event.preventDefault();
            invalidValidation.innerHTML = "<p>" + 'Revisá que las contraseñas coincidan' + '</p>';
            validation.style.border = "1px solid #CF664F";
        } else {
            invalidValidation.innerHTML = '';
            validation.style.border = "1px solid #ced4da";
        }


        // VALIDACIÓN DEL CAMPO AVATAR DE LA VISTA REGISTRO
        let avatar = document.querySelector('input#avatar');
        let avatarContent = avatar.value;
        console.log(avatarContent);
        extension = (avatarContent.substring(avatarContent.lastIndexOf("."))).toLowerCase();
        console.log(extension)
        let emptyAvatar = registerForm.querySelector('div.emptyAvatar');
        let invalidAvatar = registerForm.querySelector('div.invalidAvatar');

        if (avatarContent == '') {
            event.preventDefault();
            emptyAvatar.innerHTML = "<p>" + '¡No te olvides de cargar una imagen!' + '</p>';
        } else {
            emptyAvatar.innerHTML = '';
        }

        if (avatarContent != '' && extension != '.jpg' && extension != '.png' && extension != '.jpeg' && extension != '.gif') {
            event.preventDefault();
            invalidAvatar.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' +  '</p>';
        } else {
            invalidAvatar.innerHTML = "";
        }
    })
})