import axios from 'axios'
import { Libro } from '../domain/libro'
import { Prestamo } from '../domain/prestamo'
import { SERVER_CONNECTION } from './constants'

class PrestamoService {
  prestamos = []

  async getPrestamosPendientes() {
    const prestamosJson = await axios.get(SERVER_CONNECTION + '/prestamos')
    return prestamosJson.data.map((prestamoJson) => Prestamo.fromJSON(prestamoJson))
  }

  async prestar(libro, persona) {
    if (!persona) throw new Error('Debe seleccionar una persona')
    if (!libro || !(libro instanceof Libro)) throw new Error('Debe seleccionar un libro')
    if (libro.prestado) throw new Error('No se puede prestar el libro ' + libro + ' porque ya está prestado')
    const prestamo = new Prestamo(libro, persona)
    await axios.post(SERVER_CONNECTION + '/prestamos', prestamo)
  }
  
  async devolver(prestamo) {
    await axios.patch(SERVER_CONNECTION + '/prestamos', prestamo)
  }
}

export const prestamoService = new PrestamoService()
