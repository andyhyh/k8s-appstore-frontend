import { connect } from 'react-redux'
import { closeApplication, fetchApplicationStatus } from '../actions/applications'
import ApplicationItem from '../components/ApplicationItem'

const mapStateToProps = (state) => ({
  isLoading: state.applications.applicationIsLoading,
  application: state.applications.application,
})

const mapDispatchToProps = {
  actCloseApplication: closeApplication,
  getData: fetchApplicationStatus
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationItem)

export default Controller
