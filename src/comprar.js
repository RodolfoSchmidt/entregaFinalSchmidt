

const btn = document.getElementById('btn-compra');
btn.addEventListener('click', () => {
    swal({
        title: "esta seguro que quiere realizar la compra?",
        text: "usted esta comprando: ",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("perfecto. estamos procesando su pedido", {
            icon: "success",
            
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      })});






