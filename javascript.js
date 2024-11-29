// Select elements
const preRegisterBtn = document.getElementById('preRegisterBtn');
const preRegisterModal = document.getElementById('preRegisterModal');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('signupform');

const errormessage = document.getElementById('errormsg')

// Open the modal
preRegisterBtn.addEventListener('click', () => {
    preRegisterModal.style.display = 'flex';
});

// Close the modal
subbut.addEventListener('click', (e) => {
    const pass = document.getElementById('pwd');
    const cfm = document.getElementById('cfm');
    const password = pass.value;
    const confirmPassword = cfm.value;

    if (password !== confirmPassword)  {
        e.preventDefault(); 
        errormessage.style.display = 'block';
    }
    else {
        preRegisterModal.style.display = 'none';
        
    }
});

// Close the modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === preRegisterModal) {
        preRegisterModal.style.display = 'none';
    }
});
closeModal.addEventListener('click', () => {
    preRegisterModal.style.display = 'none';
  });