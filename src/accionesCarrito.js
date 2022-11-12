import { actualizarTotalesCarrito } from './actualizarCarrito.js';
import { productos } from './stock.js';
import { obtenerCarritoStorage } from './storage.js';

//Array vacio del carrito de compras para iterar y con las acciones.
let carrito = [];

//Función con la utilidad de validar la existencia del producto en el array, de ser así sumar +1 sino crear.
const validarProductoRepetido = (productoId) => {

    localStorage.getItem('carrito') ? carrito = obtenerCarritoStorage() : console.log('el carrito no existe');
    

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};
// función que agrega el producto al carrito. y envía mensaje a través de la librería Toastyfy
const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad = 1}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
    Toastify({
        text:"se agregó el producto al carrito",
        offset:{
            x: 25,
            y: 25,
        },
    }).showToast();
};

// pintarCarrito recibe por parámetro un array de objetos
const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad ${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        contenedor.appendChild(div);
    });
};
//Función que elimina el producto del carrito
const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

//boton de compra final
const btnCompra = document.getElementById('btn-compra');
btnCompra.addEventListener('click', () => {
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
            
          })
          ;
        } else {
          swal("Guardaremos tu producto en el carrito");
        }
      })});

//botón de vaciar carrito

const btnVaciar = document.getElementById('btn-vaciar');
btnVaciar.addEventListener('click', () => {
    swal({
        title: "esta seguro que quiere eliminar todos los productos?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("vaciamos tu carrito", {
            icon: "warning",
            
          })
          ;
        }
      })});




export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito, btnCompra, btnVaciar};