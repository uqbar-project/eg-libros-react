import { Libro } from '../domain/libro'

const libros = [
  new Libro('El Aleph', 'Jorge Luis Borges', true),
  new Libro('La guerra y la paz', 'León Tolstoi'),
  new Libro('La novela de Perón', 'Tomás Eloy Martínez', true),
  new Libro('Crimen y castigo', 'Fyodor Dostoievsky'),
  new Libro('Recuerdos del futuro', 'Siri Hustvedt'),
]

class LibroService {
  
  async getLibrosPrestables(valorABuscar) {
    return libros.filter((libro) => libro.estaDisponible() && libro.titulo.toLowerCase().includes(valorABuscar.toLowerCase()))
  }

  async findByTitulo(titulo) {
    return libros.find((libro) => libro.titulo.toLowerCase().includes(titulo.toLowerCase()))
  }
}

export const libroService = new LibroService()
