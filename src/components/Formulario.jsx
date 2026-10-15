function Formulario({ datos, onChange, onSubmit, subiendo }) {
  return (
    <form id="formulario" className="formulario" onSubmit={onSubmit}>
      <h2>Agregar Nuevo Producto</h2>

      <label>
        Id:
        <input type="text" name="id" value={datos.id} onChange={onChange} required />
      </label>

      <label>
        Nombre del Producto:
        <input type="text" name="nombre" value={datos.nombre} onChange={onChange} required />
      </label>

      <label>
        Precio:
        <input type="number" name="precio" min="0" value={datos.precio} onChange={onChange} required />
      </label>

      <label>
        Stock:
        <input type="number" name="stock" min="0" value={datos.stock} onChange={onChange} required />
      </label>

      <label>
        Imagen:
        <input type="file" name="imagen" accept="image/*" onChange={onChange} required />
      </label>

      <button type="submit" disabled={subiendo}>
        {subiendo ? 'Subiendo...' : 'Guardar Producto'}
      </button>
    </form>
  )
}

export default Formulario