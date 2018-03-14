import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserServices } from '../actions/services'
import Card from '../Components/Card'

const mapStateToProps = state => ({
  userServices: state.ServiceReducer.userServices,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserServices,
}, dispatch)

const CardContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Card)

export default CardContainer
