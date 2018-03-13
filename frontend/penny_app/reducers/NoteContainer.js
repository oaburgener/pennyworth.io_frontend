import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getServices } from '../actions/services'
import { getNotes } from '../actions/services'
import Service from '../Components/Service'
import Note from '../Components/Note'


const mapStateToProps = state => ({
  services: state.ServiceReducer.services,
  notes: state.ServiceReducer.notes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getServices,
  getNotes,
}, dispatch)

const NoteContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Note)

export default NoteContainer
