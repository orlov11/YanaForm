const modal = document.querySelector('.modal-pop'),
      btn = document.querySelector('form'),
      btnClosed = document.querySelector('#btn1');

function showModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

function hideModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';

}


modal.addEventListener('click', (e)=>{
    if(e.target == modal){
        hideModal();
    }

});

btn.addEventListener('submit', (e) =>{
    e.preventDefault();
    showModal();
    setTimeout(hideModal, 3000)
});

btnClosed.addEventListener('click', (e) =>{
    hideModal();
});

document.addEventListener('keydown',  (e)=>{
    if(e.code === 'Escape' && modal.classList.contains('show')){
        hideModal();
    }

});