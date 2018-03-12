export const GET_SERVICES = 'GET_SERVICES'

export const getServices = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/services/')
    const json = await response.json()

    dispatch({
      type: GET_SERVICES,
      data: json.data,
    })
  }
}
