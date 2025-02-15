import axios from 'axios'
import { SERVER_CONNECTION } from './constants'
import { Libro, PRESTADO } from '../domain/libro'
import { compare } from './util'

class LibroService {
  
  async getLibrosPrestables(valorABuscar: string) {
    const librosJson = await axios.get(SERVER_CONNECTION + '/libros/' + valorABuscar)
    return librosJson.data.map((libroJson: Libro) => new Libro(libroJson.id, libroJson.titulo, libroJson.autor, libroJson.estado === PRESTADO))
  }

  async findByTitulo(titulo: string) {
    const libros = await this.getLibrosPrestables(titulo)
    return libros.find((libro: Libro) => compare(libro.titulo, titulo))
  }
}

export const libroService = new LibroService()
