import axios from "axios"
import swal from 'sweetalert';
//constantes
export const GET_TECNOLOGIAS = "GET_TECNOLOGIAS"
export const GET_USUARIOS = "GET_USUARIOS"
//rutas
export const URL_USUARIOS = 'http://localhost:3001/usuarios'
export const URL_TECNOLOGIAS = 'http://localhost:3001/tecnologias'
//aciones

export const getUsuarios = async () => {
  await axios.get(URL)
}

export const getTecnologias = () => {

  return function (dispatch) {
    return axios.get(URL_TECNOLOGIAS).then((res) => {
      dispatch({
        type: GET_TECNOLOGIAS,
        payload: res.data
      })
    }).catch((err) => {
      swal('Error', err.response.data, 'warning');
    })
  }
}
