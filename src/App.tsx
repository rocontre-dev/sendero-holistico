import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Recursos from './pages/Recursos'
import Bioenergia from './pages/Bioenergia'
import DisenoHumano from './pages/DisenoHumano'
import TerapiaSomatica from './pages/TerapiaSomatica'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'
import Reservas from './pages/Reservas'

// Nuevos servicios principales
import MovimientoConsciente from './pages/MovimientoConsciente'
import HabitarEmociones from './pages/HabitarEmociones'
import Bioemocion from './pages/Bioemocion'
import CosmosCorporeo from './pages/CosmosCorporeo'
import Meditaciones from './pages/Meditaciones'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-mi" element={<About />} />
        <Route path="recursos" element={<Recursos />} />
        
        {/* Servicios principales (nuevos) */}
        <Route path="movimiento-consciente" element={<MovimientoConsciente />} />
        <Route path="habitar-emociones" element={<HabitarEmociones />} />
        <Route path="bioemocion" element={<Bioemocion />} />
        <Route path="cosmos-corporeo" element={<CosmosCorporeo />} />
        <Route path="meditaciones" element={<Meditaciones />} />
        
        {/* Servicios existentes (mantenidos) */}
        <Route path="bioenergia" element={<Bioenergia />} />
        <Route path="diseno-humano" element={<DisenoHumano />} />
        <Route path="terapia-somatica" element={<TerapiaSomatica />} />
        
        <Route path="testimonios" element={<Testimonios />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="reservas" element={<Reservas />} />
      </Route>
    </Routes>
  )
}

export default App