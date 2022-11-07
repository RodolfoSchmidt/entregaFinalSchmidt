

const btn = document.getElementById('btn-compra');
btn.addEventListener('click', () => {
    swal({
        title: "esta seguro que quiere realizar la compra?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("perfecto. estamos procesando su pedido", {
            icon: "warning",
            
          });
        } else {
          swal("Guardaremos tu producto en el carrito");
        }
      })});






