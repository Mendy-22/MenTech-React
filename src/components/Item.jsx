function Item({ nombre, precio, stock, imagen, onAgregar }) {
      return (
            <div className="producto">
                  <img src={imagen} alt={nombre} />
                  <h3>{nombre}</h3>
                  <p>Precio: ${precio}</p>
                  <p>Stock: {stock}</p>
                  <button onClick={onAgregar}>Agregar al carrito</button>
            </div>
      )
}

export default Item