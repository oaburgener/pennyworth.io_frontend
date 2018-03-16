import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getServiceId, getNotes } from '../actions/dateTime'
import NoteModal from '../Components/NoteModal'

const mapStateToProps = state => ({
  service_id: state.NewServicesReducer.reservationServiceId,
  notes: state.NewServicesReducer.reservationNotes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getServiceId,
  getNotes
}, dispatch)

const NoteContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(NoteModal)

export default NoteContainer
