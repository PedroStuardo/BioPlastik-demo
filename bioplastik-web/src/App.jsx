
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

      <section style={{ padding: '2rem', backgroundColor: 'white' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Con Quiénes Trabajamos</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>Productores de Frutas y Hortalizas</h3>
            <p>Desde pequeños agricultores hasta grandes exportadoras...</p>
          </li>
          <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>Cooperativas Agrícolas</h3>
            <p>Facilitamos planes colectivos de certificación ambiental...</p>
          </li>
          <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>Empresas de Exportación</h3>
            <p>Integramos requisitos del Sello Verde a la cadena de valor...</p>
          </li>
        </ul>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Precios de Asesorías</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>Plan Inicial</h3>
            <p>Diagnóstico + Plan de Acción</p>
            <strong>UF 25</strong>
          </li>
          <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>Plan Avanzado</h3>
            <p>Acompañamiento + Capacitación</p>
            <strong>UF 50</strong>
          </li>
          <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>Plan Certificación</h3>
            <p>Asesoría hasta la obtención del sello</p>
            <strong>UF 80</strong>
          </li>
        </ul>
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
