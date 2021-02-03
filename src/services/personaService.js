const personas = [
  {
    'id': 1,
    'nombre' : 'Lampone',
    'password' : 'Osorio',
  },
  {
    'id': 2,
    'nombre' : 'Medina',
    'password' : 'Piquito',
  },
  {
    'id': 3,
    'nombre' : 'Ravena',
    'password' : 'Cozzetti',
  },
  {
    'id': 4,
    'nombre' : 'Santos',
    'password' : 'Milazzo',
  },
]

class PersonaService {

  async getPersonas() {
    return personas
  }

  async findByNombre(nombre) {
    return personas.find((persona) => persona.nombre.toLowerCase().includes(nombre.toLowerCase()))
  }
}

export const personaService = new PersonaService()