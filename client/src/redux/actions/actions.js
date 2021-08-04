import axios from "axios"

export const GET_ALUMNOS = "GET_ALUMNOS"
export const URL = 'http://localhost:3001/alumnos'
export const getAlumnos = async () => {
  await axios.get(URL)
}