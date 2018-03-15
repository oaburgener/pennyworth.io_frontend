import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDateTime } from '../actions/dateTime'
import Schedule from '../Components/Schedule'

const mapStateToProps = state => ({
  dateTime: state.dateTime.dateTime,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDateTime,
}, dispatch)

const NoteContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Schedule)

export default NoteContainer
