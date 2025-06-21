
import React from 'react'

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0fdf4', color: '#1f2937', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#065f46', color: 'white', padding: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>BioPlastik</h1>
        <p>Asesorías para un Futuro Agrícola Sustentable</p>
      </header>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Quiénes Somos</h2>
        <p style={{ maxWidth: '700px', marginTop: '0.5rem' }}>
          En BioPlastik, somos una empresa de asesorías especializada en apoyar a predios agrícolas en su camino hacia la sustentabilidad...
        </p>
      </section>

      <footer style={{ backgroundColor: '#065f46', color: 'white', padding: '2rem', marginTop: '2rem' }}>
        <p><strong>Contacto</strong></p>
        <p>info@bioplastik.cl | +56 9 1234 5678</p>
        <p style={{ marginTop: '0.5rem' }}>© 2025 BioPlastik. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
