const equipo = [
      {
            nombre: 'Valentina Fernández',
            cargo: 'CEO',
            email: 'valentina@mentech.com',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Valentina',
      },
      {
            nombre: 'Martín Bianchi',
            cargo: 'Desarrollador',
            email: 'martin@mentech.com',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Martin',
      },
      {
            nombre: 'Camila Rojas',
            cargo: 'Marketing',
            email: 'camila@mentech.com',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Camila',
      },
]

function Footer() {
      return (
      <footer id="nosotros">
            <h3>MenTech - Celulares gamer</h3>
            <p>Tu tienda de celulares para el mundo gamer. Dispositivos liberados con envío a todo el país.</p>
            <h3>Nuestro Equipo</h3>
      <div className="equipo">
            {equipo.map((persona) => (
                  <div key={persona.email} className="tarjeta-equipo">
                        <img src={persona.avatar} alt={persona.nombre} className="avatar" />
                        <strong>{persona.nombre}</strong>
                        <span>{persona.cargo}</span>
                        <span>{persona.email}</span>
                  </div>
            ))}
      </div>
      <p>&copy; 2026 MenTech. Creado por Ismael Mendy.</p>
      </footer>
      )
}

export default Footer