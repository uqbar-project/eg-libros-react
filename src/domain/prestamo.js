import { format } from 'date-fns'

export class Prestamo {
  constructor(libro, persona) {
    this.libro = libro
    this.persona = persona
    this.fechaPrestamo = new Date()
    this.fechaDevolucion = undefined
  }

  devolver() {
    this.fechaDevolucion = new Date()
    this.libro.devolver()
  }

  pendiente() {
    return !this.fechaDevolucion
  }

  get fechaAMostrar() {
    return format(this.fechaPrestamo, 'dd/MM/yyyy')
  }
}