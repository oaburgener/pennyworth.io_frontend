import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserServices } from '../actions/services'
import Chore from '../Components/Chore'

const mapStateToProps = state => ({
  userServices: state.ServiceReducer.userServices.services,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserServices,
}, dispatch)

const ChoreContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Chore)

export default ChoreContainer
