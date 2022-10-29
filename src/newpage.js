const btn = document.getElementById('btn-redic');
btn.addEventListener('click', () =>{
    Toastify({
        text:'redict',
        duration: 3000,
        destination: 'https://github.com/apvarun/toastify-js/blob/master/README.md'
        
    }).showToast();
});