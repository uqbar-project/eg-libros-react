import './App.css'
import { PrestamosRoutes } from './routes'
import { libroService } from './services/libroService'
import { personaService } from './services/personaService'
import { prestamoService } from './services/prestamoService'

async function init() {
  const medina = await personaService.findByNombre('Medina')
  const santos = await personaService.findByNombre('Santos')
  const laNovelaDePeron = await libroService.findByTitulo('Novela')
  const elAleph = await libroService.findByTitulo('Aleph')
  await prestamoService.prestar(laNovelaDePeron, medina)
  await prestamoService.prestar(elAleph, santos)
}

init()

function App() {
  return (
    <div className="App">
      <PrestamosRoutes />
    </div>
  )
}

export default App
