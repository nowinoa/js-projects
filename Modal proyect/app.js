// señect modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add. OPEN-MODAL to modal-overlay
// when user clisk close-btn, eemove it
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('open-modal');
})
closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
})