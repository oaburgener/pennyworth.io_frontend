export const GET_SERVICES = 'GET_SERVICES'
export const GET_NOTES = 'GET_NOTES'

export const getServices = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/services/')
    const json = await response.json()

    dispatch({
      type: GET_SERVICES,
      data: json,
    })
  }
}

//call to specific id

export const getNotes = () => {

  let tokenId =

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/users_services/${tokenId}`)
    const json = await response.json()

    dispatch({
      type: GET_NOTES,
      data: json,
    })
  }
}
