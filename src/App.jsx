import { useState } from 'react'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito'
import './App.css'
import FormularioContainer from './components/FormularioContainer'

function App() {
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(producto) {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id)
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [
        ...prev,
        { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 },
      ]
    })
  }

  function sumar(id) {
    setCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item))
    )
  }

  function restar(id) {
    setCarrito((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item))
        .filter((item) => item.cantidad > 0)
    )
  }

  return (
    <Layout>
      <ItemListContainer onAgregar={agregarAlCarrito} />
      <FormularioContainer />
      <Carrito carrito={carrito} onSumar={sumar} onRestar={restar} />
    </Layout>
  )
}

export default App