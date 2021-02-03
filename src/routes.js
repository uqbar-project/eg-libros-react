import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PrestamosPendientes } from './components/PrestamosPendientes'
import { NuevoPrestamo } from './components/NuevoPrestamo'

export const PrestamosRoutes = () => (
  <Router>
      <Switch>
          <Route exact path="/" component={PrestamosPendientes} />
          <Route path="/nuevoPrestamo" component={NuevoPrestamo} />
      </Switch>
  </Router>
)