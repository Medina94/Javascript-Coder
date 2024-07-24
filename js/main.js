// para restarle a los indices cuando voy a obtener el valor de un array y no pasarme de su longitud real
const RESTAR_INDICE = 1;

const frutas = [{producto: 'manzana', stock: 10}, {producto: 'pera', stock: 10}, {producto: 'uvas', stock: 10}];
const almacen = [{producto: 'arroz', stock: 10}, {producto: 'fideos', stock: 10}, {producto: 'galletas', stock: 10}];
const limpieza = [{producto: 'shampoo', stock: 10}, {producto: 'cepillo de dientes', stock: 10}, {producto: 'desodorante', stock: 10}];

// Valido la cantidad ingresada contra el stock que se define por cada producto
const validarStock = (cant, stock) =>{
    return stock >= cant;
}   

// Pido por consola el producto a agregar y lo inserto en el array 'carrito'
const agregarACarrito = (opcion) => {
    let seguirAgregando = true;
    let productoElegido = 0;
    let cantidadElegida = 0;
    switch(opcion){
        case 1:{
            productoElegido = parseInt(prompt('Elija un producto:\n1 - manzana\n2 - pera\n3 - uvas\n4 - Volver\n0 - Terminar'));
            productoElegido = productoElegido - RESTAR_INDICE; // resto uno para no exceder la longitud del array
            cantidadElegida = parseInt(prompt('Elija una cantidad: '));
            // valido para no agregar más que el stock
            if(validarStock(cantidadElegida, frutas[productoElegido].stock)){
                // agrego al carrito productos de frutas
                carrito.push({producto: frutas[productoElegido].producto, stock: cantidadElegida});
                console.log('Se agrego ' + frutas[productoElegido].producto + ' al carrito...Tenés ' + carrito.length + ' productos en tu carrito.');
            }else{
                alert('Stock insuficiente!!');
            }
            break;
        }
        case 2:{
            productoElegido = parseInt(prompt('Elija un producto:\n1 - arroz\n2 - fideos\n3 - galletas\n4 - Volver\n0 - Terminar'));
            productoElegido = productoElegido - RESTAR_INDICE; // resto uno para no exceder la longitud del array
            cantidadElegida = parseInt(prompt('Elija una cantidad: '));
            // valido para no agregar más que el stock
            if(validarStock(cantidadElegida, almacen[productoElegido].stock)){
                // agrego al carrito productos de almacen
                carrito.push({producto: almacen[productoElegido].producto, stock: cantidadElegida});
                console.log('Se agrego ' + almacen[productoElegido].producto + ' al carrito...Tenés ' + carrito.length + ' productos en tu carrito.');
            }else{
                alert('Stock insuficiente!!');
            }
            break;
        }
        case 3:{
            productoElegido = parseInt(prompt('Elija un producto:\n1 - shampoo\n2 - cepillo de dientes\n3 - desodorante\n4 - Volver\n0 - Terminar'));
            productoElegido = productoElegido - RESTAR_INDICE; // resto uno para no exceder la longitud del array
            cantidadElegida = parseInt(prompt('Elija una cantidad: '));
            // valido para no agregar más que el stock
            if(validarStock(cantidadElegida, limpieza[productoElegido].stock)){
                // agrego al carrito productos de limpieza
                carrito.push({producto: limpieza[productoElegido].producto, stock: cantidadElegida});
                console.log('Se agrego ' + limpieza[productoElegido].producto + ' al carrito...Tenés ' + carrito.length + ' productos en tu carrito.');
            }else{
                alert('Stock insuficiente!!');
            }
            break;
        }
        case 4:
            // lo manejo SOLO para salir del menu y permitir seguir agregando
            console.log('Vuelviendo al menu...');
            break;
        case 0:{
            seguirAgregando = false;
            break;
        }
        default:
            console.log('opcion incorrecta. Selecciona una de las opciones indicadas...');
    }
    return seguirAgregando;
}

// carrito de compras
let carrito = [];
let agregar = true;

const producto = 0;
const cantidad = 0;

while(agregar){
    const categoria = parseInt(prompt('Agrega productos a tu carrito de compras:\n1 - Frutas\n2 - Almacen\n3 - Limpieza\n0 - Salir'));
    agregar = agregarACarrito(categoria);
}
console.log('Terminaste de agregar productos a tu carrito...');

// Valido y recorro mi array en caso de que no esté vacio
if(carrito.length > 0){
    console.log('Tus productos agregados son:');
    for(let i=0; i < carrito.length; i++){
        console.log(i+1 + '- ' + carrito[i].producto + ' x ' + carrito[i].stock + ' unidades');
    }
}else{
    console.log('Tu carrito está vacio!');
}

