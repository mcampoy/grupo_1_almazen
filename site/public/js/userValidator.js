// VALIDACIÓN DEL LOGIN (VISTA)

addEventListener('load', function() {

    let form = document.getElementById('loginForm');
    form.addEventListener('submit', function(e) {

        // VALIDACIÓN DEL CAMPO EMAIL DE LA VISTA LOGIN

        let emailLog = document.getElementById('emailLog');
        let emailContent = emailLog.value;
        let arroba = emailContent.includes('@');
        let emailLength = emailContent.length >= 6 ? true : false;
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
        let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
        //let passLength = passLogContent.length >= 4 ? true : false;
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

        if (!regExp.test(passLogContent) && passLogContent != '') {
            event.preventDefault();
            invalidPass.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita' + '</p>';
            passLog.style.border = "1px solid #CF664F";
        } else {
            invalidPass.innerHTML = '';
            passLog.style.border = "1px solid #ced4da";
        }

        /*if (passLogContent != '' && !passLength) {
            e.preventDefault();
            invalidPass.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita. Debe tener al menos 4 caracteres' + '</p>';
            iconoKey.style.backgroundColor = "#CF664F";
            passLog.style.border = "1px solid #CF664F";
        } else {
            invalidPass.innerHTML = '';
            passLog.style.border = "1px solid #ced4da";
        }*/
    })

})

// VALIDACIÓN DEL REGISTRO (VISTA)

addEventListener('load', function() {

    let registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {


        // VALIDACIÓN CAMPO EMAIL DE LA VISTA REGISTRO
        let nameReg = document.querySelector('input#nameReg');
        let nameRegContent = nameReg.value;
        let emptyName = document.querySelector('div.emptyName');

        if (nameRegContent = '' || nameRegContent.length < 3) {
            event.preventDefault();
            emptyName.innerHTML = '<p>' + 'Por favor, ingresá tu nombre. Debe tener al menos tres caracteres' + '</p>';
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
        let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
        // let passRegLength = passRegContent.length >= 8 ? true : false;

        if (passRegContent == '') {
            event.preventDefault();
            emptyRegPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
            passReg.style.border = "1px solid #CF664F";
        } else {
            emptyRegPass.innerHTML = '';
            passReg.style.border = "1px solid #ced4da";
        }

        if (!regExp.test(passRegContent) && passRegContent != '') {
            event.preventDefault();
            invalidRegPass.innerHTML = "<p>" + 'Debe tener un mínimo de 8 caracteres, al menos una letra y un número' + '</p>';
            passReg.style.border = "1px solid #CF664F";
        } else {
            invalidRegPass.innerHTML = '';
            passReg.style.border = "1px solid #ced4da";
        }

        /*if (passRegContent != '' && !passRegLength) {
            event.preventDefault();
            invalidRegPass.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita. Debe tener al menos 8 caracteres' + '</p>';
            passReg.style.border = "1px solid #CF664F";
        } else {
            invalidRegPass.innerHTML = '';
            passReg.style.border = "1px solid #ced4da";
        }*/

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
            invalidAvatar.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' + '</p>';
        } else {
            invalidAvatar.innerHTML = "";
        }
    })
})

// VALIDACIÓN DEL CAMPO EMAIL EN EL LOGIN MODAL

addEventListener('load', function() {
    let btnLogM = document.getElementById('btnLogM');

    btnLogM.addEventListener('click', function(evento) {

        let formM = document.getElementById('loginFormM');
        let emailLogM = document.getElementById('emailLogM');
        let emailContentM = emailLogM.value;
        let arrobaM = emailContentM.includes('@');
        let emailLengthM = emailContentM.length >= 6 ? true : false;
        // let extension = emailContent.includes('.')
        let invalidEmailM = formM.querySelector('div.emptyEmailM');
        let iconoEmailM = formM.querySelector('i#emailIconLogM');
        let emptyEmailM = document.querySelector('div.emptyEmailM');

        if (emailContentM == '' || !emailLengthM) {
            evento.preventDefault();
            emptyEmailM.innerHTML = '<p>' +
                'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
            iconoEmailM.style.backgroundColor = "#CF664F";
            emailLogM.style.border = "1px solid #CF664F";
        } else {
            emptyEmailM.innerHTML = '';
            iconoEmailM.style.backgroundColor = "#6FCF97";
            emailLogM.style.border = "1px solid #ced4da";
        }

        if (emailContentM != '' && !arrobaM) {
            evento.preventDefault();
            invalidEmailM.innerHTML = "<p>" +
                'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' +
                '<span style="font-weight: 600">' + emailContentM + '</span>' + ' no la incluye.' +
                '</p>';
            iconoEmailM.style.backgroundColor = "#CF664F";
            emailLogM.style.border = "1px solid #CF664F";
        }

        // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA MODAL
        let passLogM = document.getElementById('passwordLogM');
        let passLogContentM = passLogM.value;
        let emptyPassM = formM.querySelector('div.emptyPassLogM');
        let invalidPassM = formM.querySelector('div.invalidPassLogM');
        //let passLengthM = passLogContentM.length >= 4 ? true : false;
        let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
        let iconoKeyM = formM.querySelector('i#keyIconLogM');

        if (passLogContentM == '') {
            evento.preventDefault();
            emptyPassM.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
            iconoKeyM.style.backgroundColor = "#CF664F";
            passLogM.style.border = "1px solid #CF664F";
        } else {
            emptyPassM.innerHTML = '';
            iconoKeyM.style.backgroundColor = "#6FCF97";
            passLogM.style.border = "1px solid #ced4da";
        }

        if (!regExp.test(passLogContentM) && passLogContentM != '') {
            event.preventDefault();
            invalidPassM.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita' + '</p>';
            passLogM.style.border = "1px solid #CF664F";
        } else {
            invalidPassM.innerHTML = '';
            passLogM.style.border = "1px solid #ced4da";
        }

        /*if (passLogContentM != '' && !passLengthM) {
            evento.preventDefault();
            invalidPassM.innerHTML = "<p>" +
                'Revisá que la contraseña esté bien escrita. Debe tener al menos 4 caracteres' +
                '</p>';
            iconoKeyM.style.backgroundColor = "#CF664F";
            passLogM.style.border = "1px solid #CF664F";
        } else {
            invalidPassM.innerHTML = '';
            passLogM.style.border = "1px solid #ced4da";
        }*/
    })

})

//  VALIDACION REGISTRO MODAL

addEventListener('load', function() {

    let btnRegM = document.getElementById('btnRegM');
    btnRegM.addEventListener('click', function(even) {
        // VALIDACIÓN CAMPO EMAIL MODAL REGISTRO
        let nameRegM = document.querySelector('input#nameRegM');
        let nameRegContentM = nameRegM.value;
        let emptyNameM = document.querySelector('div.emptyNameM');

        if (nameRegContentM = '' || nameRegContentM.length < 3) {
            even.preventDefault();
            emptyNameM.innerHTML = '<p>' +
                'Por favor, ingresá tu nombre. Debe tener al menos tres caracteres' + '</p>';
            nameRegM.style.border = "1px solid #CF664F";
        } else {
            emptyNameM.innerHTML = '';
            nameRegM.style.border = "1px solid #ced4da";
        }

        // VALIDACIÓN CAMPO EMAiL DE LA VISTA REGISTRO
        let emailRegM = document.getElementById('emailRegM');
        let emailRegContentM = emailRegM.value;
        let arrobaRegM = emailRegContentM.includes('@');
        let emailRegLengthM = emailRegContentM.length >= 6 ? true : false;
        let invalidRegEmailM = document.querySelector('div.emptyRegEmailM');
        let emptyRegEmailM = document.querySelector('div.emptyRegEmailM');

        if (emailRegContentM == '' || !emailRegLengthM) {
            even.preventDefault();
            emptyRegEmailM.innerHTML = '<p>' +
                'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
            emailRegM.style.border = "1px solid #CF664F";
        } else {
            emptyRegEmailM.innerHTML = '';
            emailRegM.style.border = "1px solid #ced4da";
        }

        if (emailRegContentM != '' && !arrobaRegM) {
            even.preventDefault();
            invalidRegEmailM.innerHTML = "<p>" +
                'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' +
                '<span style="font-weight: 600">' + emailRegContentM + '</span>' +
                ' no la incluye.' + '</p>';
            emailRegM.style.border = "1px solid #CF664F";
        }

        // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA REGISTRO
        let passRegM = document.querySelector('input#passwordRegM');
        let passRegContentM = passRegM.value;
        let emptyRegPassM = document.querySelector('div.emptyPassRegM');
        let invalidRegPassM = document.querySelector('div.invalidPassRegM');
        //let passRegLengthM = passRegContentM.length >= 4 ? true : false;
        let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

        if (passRegContentM == '') {
            even.preventDefault();
            emptyRegPassM.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
            passRegM.style.border = "1px solid #CF664F";
        } else {
            emptyRegPassM.innerHTML = '';
            passRegM.style.border = "1px solid #ced4da";
        }

        if (!regExp.test(passRegContentM) && passRegContentM != '') {
            event.preventDefault();
            invalidRegPassM.innerHTML = "<p>" + 'Debe tener un mínimo de 8 caracteres, al menos una letra y un número' + '</p>';
            passRegM.style.border = "1px solid #CF664F";
        } else {
            invalidRegPassM.innerHTML = '';
            passRegM.style.border = "1px solid #ced4da";
        }

        /*if (passRegContentM != '' && !passRegLengthM) {
            even.preventDefault();
            invalidRegPassM.innerHTML = "<p>" +
                'Revisá que la contraseña esté bien escrita. Debe tener al menos 4 caracteres' +
                '</p>';
            passRegM.style.border = "1px solid #CF664F";
        } else {
            invalidRegPassM.innerHTML = '';
            passRegM.style.border = "1px solid #ced4da";
        }*/

        // VALIDACIÓN DEL CAMPO VALIDACIÓN DE LA VISTA REGISTRO
        let validationM = document.querySelector('input#validationM');

        let validationContentM = validationM.value;
        let emptyValidationM = registerFormM.querySelector('div.emptyValidationM');
        let invalidValidationM = registerFormM.querySelector('div.invalidValidationM');

        if (validationContentM == '') {
            even.preventDefault();
            emptyValidationM.innerHTML = '<p>' + 'Por favor, repetí tu contraseña' + '</p>';
            validationM.style.border = "1px solid #CF664F";
        } else {
            emptyValidationM.innerHTML = '';
            validationM.style.border = "1px solid #ced4da";
        }

        if (passRegContentM != validationContentM) {
            even.preventDefault();
            invalidValidationM.innerHTML = "<p>" + 'Revisá que las contraseñas coincidan' + '</p>';
            validationM.style.border = "1px solid #CF664F";
        } else {
            invalidValidationM.innerHTML = '';
            validationM.style.border = "1px solid #ced4da";
        }

        // VALIDACIÓN DEL CAMPO AVATAR DE LA VISTA REGISTRO
        let avatarM = document.querySelector('input#avatarM');
        let avatarContentM = avatarM.value;
        extensionM = (avatarContentM.substring(avatarContentM.lastIndexOf("."))).toLowerCase();
        let emptyAvatarM = registerFormM.querySelector('div.emptyAvatarM');
        let invalidAvatarM = registerFormM.querySelector('div.invalidAvatarM');

        if (avatarContentM == '') {
            even.preventDefault();
            emptyAvatarM.innerHTML = "<p>" + '¡No te olvides de cargar una imagen!' + '</p>';
        } else {
            emptyAvatarM.innerHTML = '';
        }

        if (avatarContentM != '' && extensionM != '.jpg' && extensionM != '.png' && extensionM !=
            '.jpeg' && extensionM !=
            '.gif') {
            even.preventDefault();
            invalidAvatarM.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' +
                '</p>';
        } else {
            invalidAvatarM.innerHTML = "";
        }
    })

})