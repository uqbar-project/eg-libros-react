import { Libro } from '../domain/libro'
import { prestamoService } from './prestamoService'

const medina = {
  'id': 1,
  'nombre' : 'Medina',
  'password' : 'Piquito'
}

const laNovelaDePeron = new Libro(1, 'La novela de Perón', 'Tomás Eloy Martínez', false)

beforeEach(async () => {
  // hay que mockear
  await prestamoService.prestar(laNovelaDePeron, medina)
})

test ('dada una lista de préstamos, podemos conocer los préstamos pendientes', async () => {
  // hay que mockear
  const prestamos = await prestamoService.getPrestamosPendientes()
  expect(1).toBe(prestamos.length)
})