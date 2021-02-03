import { Libro } from '../domain/libro'
import { Prestamo } from '../domain/prestamo'

class PrestamoService {
  prestamos = []

  async getPrestamosPendientes() {
    return this.prestamos.filter((prestamo) => prestamo.pendiente())
  }

  async prestar(libro, persona) {
    if (!persona) throw new Error('Debe seleccionar una persona')
    if (!libro || !(libro instanceof Libro)) throw new Error('Debe seleccionar un libro')
    if (libro.prestado) throw new Error('No se puede prestar el libro ' + libro + ' porque ya está prestado')
    libro.prestar()
    this.prestamos.push(new Prestamo(libro, persona))
  }
  
  async devolver(prestamo) {
    prestamo.devolver()
  }
}

export const prestamoService = new PrestamoService()
