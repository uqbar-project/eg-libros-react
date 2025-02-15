import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { NuevoPrestamo } from './components/NuevoPrestamo'
import { PrestamosPendientes } from './components/PrestamosPendientes'

const PrestamosRoutes = () => (
  <Routes>
      <Route path="/" element={<PrestamosPendientes/>} />
      <Route path="/nuevoPrestamo" element={<NuevoPrestamo/>} />
  </Routes>
)

export const PrestamosRouter = () => 
  <Router>
      <PrestamosRoutes/>
  </Router>
