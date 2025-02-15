import axios from 'axios'
import { SERVER_CONNECTION } from './constants'
import { Persona } from '../domain/persona'
import { compare } from './util'

class PersonaService {

  async getPersonas() {
    const personasJson = await axios.get(SERVER_CONNECTION + '/personas')
    return personasJson.data
  }

  async findByNombre(nombre: string) {
    const personas = await this.getPersonas()
    return personas.find((persona: Persona) => compare(persona.nombre, nombre))
  }
}

export const personaService = new PersonaService()