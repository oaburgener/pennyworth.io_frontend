import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getServices } from '../actions/services'
import Service from '../Components/Service'

const mapStateToProps = state => ({
  services: state.ServiceReducer.services
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getServices,
}, dispatch)

const ServiceContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Service)

export default ServiceContainer
