const frmLogin = document.querySelector('#frmLogin');
const inpEmail = frmLogin.querySelector('#email');
const inpName = frmLogin.querySelector('#name');
const inpBirth = frmLogin.querySelector('#birth');
const inpProfile = frmLogin.querySelector('#profile');
const inpMan = frmLogin.querySelector('#rbnman');
const inpVrouw = frmLogin.querySelector('#rbnvrouw');
const inpInterests = frmLogin.querySelectorAll('#chbsInterests')
const msgName = frmLogin.querySelector('#msgname');
const msgEmail = frmLogin.querySelector('#msgemail');
const msgBirth = frmLogin.querySelector('#msgbirth');
const msgProfile = frmLogin.querySelector('#msgprofile');
const msgGender = frmLogin.querySelector('#msggender');
const msgInterests = frmLogin.querySelector('#msginterests')

frmLogin
.setAttribute
('novalidate', 'novalidate');

frmLogin.addEventListener('submit', function (e){
    e.preventDefault();
    
   
    if (inpEmail.value == '') {
        msgEmail.innerHTML = 'mag niet leeg zijn';
       
    }
    else if (inpEmail.value != '') {
        msgEmail.innerHTML = '';

    }
    if (inpName.value == '') {
        msgName.innerHTML = 'mag niet leeg zijn';
        
    }
    else if (inpName.value != '') {
        msgName.innerHTML = '';
    }
    if (inpBirth.value == '') {
        msgBirth.innerHTML = 'geboortedatum mag niet leeg zijn';
     
    }
    else if (inpBirth.value != '') {
        msgBirth.innerHTML = '';
    }
    if (inpProfile.selectedIndex == 0) {
        msgProfile.innerHTML = 'Selecteer een profiel';
    }
    else if (inpProfile.selectedIndex != 0) {
        msgProfile.innerHTML = '';
    }
    if (inpMan.checked == false && inpVrouw.checked == false) {
        msgGender.innerHTML = 'Selecteer een geslacht';
    }
    else if (inpMan.checked == true || inpVrouw.checked == true) {
        msgGender.innerHTML = '';
    }
    
    for (let i = 0; i < inpInterests.length; i++) {
        inpInterests.forEach(interest => {
            if (interest.checked != true) {
                msgInterests.innerHTML = 'selecteer iets';
            }
        });
    }


    
})