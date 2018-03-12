import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getServices } from '../actions/services'
import Service from '../components/Service'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getServices,
}, dispatch)

const ServiceContainer = connect (
  mapStateToProps,mapDispatchToProps
)(Service)

export default ServiceContainer
