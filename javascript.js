// Select elements
const preRegisterBtn = document.getElementById('preRegisterBtn');
const preRegisterModal = document.getElementById('preRegisterModal');
const closeModal = document.getElementById('closeModal');

// Open the modal
preRegisterBtn.addEventListener('click', () => {
    preRegisterModal.style.display = 'flex';
});

// Close the modal
closeModal.addEventListener('click', () => {
    preRegisterModal.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === preRegisterModal) {
        preRegisterModal.style.display = 'none';
    }
});
