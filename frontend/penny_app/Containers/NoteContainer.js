import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getServiceId, getNotes, getUserId, postService } from '../actions/dateTime'
import NoteModal from '../Components/NoteModal'

const mapStateToProps = state => ({
  service_id: state.NewServicesReducer.service_id,
  notes: state.NewServicesReducer.notes,
  user_id: state.NewServicesReducer.user_id,
  date: state.NewServicesReducer.date
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getServiceId,
  getNotes,
  getUserId,
  postService
}, dispatch)

const NoteContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(NoteModal)

export default NoteContainer
