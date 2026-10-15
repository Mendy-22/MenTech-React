import { useState } from 'react'
import Formulario from './Formulario'

const IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY
const datosIniciales = { id: '', nombre: '', precio: '', stock: '' }

function FormularioContainer() {
      const [datos, setDatos] = useState(datosIniciales)
      const [imagen, setImagen] = useState(null)
      const [subiendo, setSubiendo] = useState(false)

function handleChange(e) {
      const { name, value, files } = e.target

      if (name === 'imagen') {
            setImagen(files[0])
            return
      }

      setDatos((prev) => ({ ...prev, [name]: value }))
}

      async function handleSubmit(e) {
            e.preventDefault()
            const form = e.target

      if (!imagen) {
            alert('Seleccioná una imagen')
            return
      }  

setSubiendo(true)

try {
      console.log('Subiendo imagen a Imgbb...')

      const formData = new FormData()
      formData.append('image', imagen)

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
            method: 'POST',
            body: formData,
      })
      const data = await res.json()

      if (!data.success) {
            throw new Error(data.error?.message || 'Falló la subida')
      }

      const urlImagen = data.data.url
      console.log('Imagen subida con éxito.')
      console.log('URL:', urlImagen)

      console.log('Enviando los siguientes datos COMPLETOS a la API:', {
            ...datos,
            urlImagen,
      })

      setDatos(datosIniciales)
      setImagen(null)
      form.reset()
} catch (error) {
      console.error('Error al subir la imagen:', error)
} finally {
      setSubiendo(false)
}
}

      return (
            <Formulario
                  datos={datos}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  subiendo={subiendo}
      />
)
}

export default FormularioContainer