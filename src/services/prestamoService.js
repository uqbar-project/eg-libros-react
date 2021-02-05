import axios from 'axios'
import { parseISO } from 'date-fns/esm'
import { Libro } from '../domain/libro'
import { Prestamo } from '../domain/prestamo'
import { SERVER_CONNECTION } from './constants'

class PrestamoService {
  prestamos = []

  async getPrestamosPendientes() {
    const prestamosJson = await axios.get(SERVER_CONNECTION + '/prestamos')
    return prestamosJson.data.map((prestamoJson) => 
      new Prestamo(prestamoJson.libro, prestamoJson.persona, parseISO(prestamoJson.fechaPrestamo))
    )
  }

  async prestar(libro, persona) {
    if (!persona) throw new Error('Debe seleccionar una persona')
    if (!libro || !(libro instanceof Libro)) throw new Error('Debe seleccionar un libro')
    if (libro.prestado) throw new Error('No se puede prestar el libro ' + libro + ' porque ya está prestado')
    const prestamo = new Prestamo(libro, persona)
    await axios.post(SERVER_CONNECTION + '/prestamos', prestamo)
  }
  
  async devolver(prestamo) {
    prestamo.devolver()
  }
}

export const prestamoService = new PrestamoService()
