import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserServices, getPennyworker } from '../actions/services'
import Card from '../Components/Card'

const mapStateToProps = state => ({
  userServices: state.ServiceReducer.userServices.services,
  userPennyworker: state.ServiceReducer.userPennyworker
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserServices,
  getPennyworker
}, dispatch)

const CardContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Card)

export default CardContainer
