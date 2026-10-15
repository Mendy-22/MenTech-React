import { useState, useEffect } from 'react'
import Item from './Item'

function ItemListContainer({ onAgregar }) {
      const [productos, setProductos] = useState([])

      useEffect(() => {
            fetch('/productos.json')
                  .then((res) => res.json())
                  .then((data) => setProductos(data))
      }, [])

      return (
            <section id="catalogo">
                  <h2>Catálogo</h2>
                  <div className="catalogo">
            {productos.map((p) => (
            <Item
                  key={p.id}
                  nombre={p.nombre}
                  precio={p.precio}
                  stock={p.stock}
                  imagen={p.imagen}
                  onAgregar={() => onAgregar(p)}
            />
            ))}
            </div>
      </section>
      )
}

export default ItemListContainer