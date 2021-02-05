import { format } from 'date-fns'

export class Prestamo {
  constructor(libro, persona, fechaPrestamo = new Date()) {
    this.libro = libro
    this.persona = persona
    this.fechaPrestamo = fechaPrestamo
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