export const LIBRE = 'L'
export const PRESTADO = 'P'

export class Libro {
  activo = true
  estado: string

  constructor(public id: number, public titulo: string, public autor: string, prestado = false) {
    this.activo = true
    this.estado = prestado ? PRESTADO : LIBRE
  }

  prestar() {
    this.estado = PRESTADO
  }

  devolver() {
    this.estado = LIBRE
  }

  estaDisponible() {
    return this.estado === LIBRE
  }
}