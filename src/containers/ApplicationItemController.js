import { connect } from 'react-redux'
import { closeApplication, fetchApplicationStatus } from '../actions/applications'
import ApplicationItem from '../components/ApplicationItem'

const mapStateToProps = (state) => ({
  isLoading: state.applications.applicationIsLoading,
  application: state.applications.application,
})

const Controller = connect(
  mapStateToProps,
)(ApplicationItem)

export default Controller
