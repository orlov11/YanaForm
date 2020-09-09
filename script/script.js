window.addEventListener('DOMContentLoaded', () =>{
    
    const modal = document.querySelector('.modal-pop'),
        btn = document.querySelector('form'),
        btnClosed = document.querySelector('#btn1'),
        check =  document.querySelector('input[type=checkbox]');

    function showModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
    }

    function hideModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        btn.reset();
    }


    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            hideModal();
        }
    });

    btn.addEventListener('submit', (e) =>{
        e.preventDefault();
        if(check.checked){
            showModal();
        } else{
            alert('Сначала нужно согласится с условиями');
        }
    });

    btnClosed.addEventListener('click', (e) =>{
        hideModal();
    });

    document.addEventListener('keydown',  (e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')){
            hideModal();
        }
    });



});