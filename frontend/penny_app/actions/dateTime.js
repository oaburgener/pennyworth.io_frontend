export const GET_DATETIME = 'GET_DATETIME'

export const getDateTime = (date) => {

  console.log('date', date);

  return async (dispatch) => {

    dispatch({
      type: UPDATE_DATE_TIME,
      date: date,
      time: time,
    })
  }
}
