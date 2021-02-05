import axios from 'axios'
import { SERVER_CONNECTION } from './constants'

class PersonaService {

  async getPersonas() {
    const personasJson = await axios.get(SERVER_CONNECTION + '/personas')
    return personasJson.data
  }

  async findByNombre(nombre) {
    return (await getPersonas).find((persona) => persona.nombre.toLowerCase().includes(nombre.toLowerCase()))
  }
}

export const personaService = new PersonaService()