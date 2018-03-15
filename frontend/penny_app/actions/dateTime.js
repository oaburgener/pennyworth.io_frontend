export const GET_DATETIME = 'GET_DATETIME'

export const getDateTime = (data) => {

  let date = ''
  let time = ''

  return async (dispatch) => {

    dispatch({
      type: GET_DATETIME,
      date: date,
      time: time,
    })
  }
}
