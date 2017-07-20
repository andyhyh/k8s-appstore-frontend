import { connect } from 'react-redux'
import { selectApplication, getAllApplications } from '../actions/'
import ApplicationList from '../components/ApplicationList'

const mapStateToProps = (state) => ({
  applications: state.applications.applications,
  isLoading: state.applications.isLoading
})

const mapDispatchToProps = {
  actSelectApplication: selectApplication,
  getAllApplications: getAllApplications
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationList)

export default Controller
