import { format, parseISO } from 'date-fns'
import { Libro } from './libro'
import { Persona } from './persona'

export class Prestamo {
  id: number | undefined
  fechaDevolucion: Date | undefined

  constructor(public libro: Libro, public persona: Persona, public fechaPrestamo = new Date()) {
    this.fechaDevolucion = undefined
  }

  pendiente() {
    return !this.fechaDevolucion
  }

  get fechaAMostrar() {
    return format(this.fechaPrestamo, 'dd/MM/yyyy')
  }
  
  static fromJSON(prestamoJson: PrestamoJSON) {
    const fecha = prestamoJson.fechaPrestamo ? parseISO(prestamoJson.fechaPrestamo) : new Date()
    const nuevoPrestamo = new Prestamo(prestamoJson.libro, prestamoJson.persona, fecha)
    nuevoPrestamo.id = prestamoJson.id
    return nuevoPrestamo
  }
}

export type PrestamoJSON = {
  id: number,
  persona: Persona,
  libro: Libro,
  fechaPrestamo: string,
}