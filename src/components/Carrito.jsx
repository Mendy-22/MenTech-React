function Carrito({ carrito, onSumar, onRestar }) {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

      return (
            <section id="carrito" className="carrito">
                  <h2>
                        <img src="/imagenes/Minimalist Shopping Cart Icon.png" alt="" className="icono-carrito" />
                        Carrito
                  </h2>
      {carrito.length === 0 && <p>No hay productos agregados</p>}
      {carrito.map((item) => (
            <div key={item.id} className="carrito-item">
                  <span>{item.nombre}</span>
                  <button onClick={() => onRestar(item.id)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => onSumar(item.id)}>+</button>
                  <span>${item.precio * item.cantidad}</span>
            </div>
      ))}
      <p><strong>Total: ${total}</strong></p>
      </section>
)
}

export default Carrito