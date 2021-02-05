import './App.css'
import { PrestamosRoutes } from './routes'
import { libroService } from './services/libroService'
import { personaService } from './services/personaService'
import { prestamoService } from './services/prestamoService'

function App() {
  return (
    <div className="App">
      <PrestamosRoutes />
    </div>
  )
}

export default App
