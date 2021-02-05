import axios from 'axios'
import { Libro } from '../domain/libro'
import { SERVER_CONNECTION } from './constants'

class LibroService {
  
  async getLibrosPrestables(valorABuscar) {
    const librosJson = await axios.get(SERVER_CONNECTION + '/libros/' + valorABuscar)
    return librosJson.data.map((libroJson) => new Libro(libroJson.id, libroJson.titulo, libroJson.autor, libroJson.estado === 'P'))
  }

  async findByTitulo(titulo) {
    const libros = await getLibrosPrestables(valorABuscar)
    return libros.find((libro) => libro.titulo.toLowerCase().includes(titulo.toLowerCase()))
  }
}

export const libroService = new LibroService()
