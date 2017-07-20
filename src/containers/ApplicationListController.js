import { connect } from 'react-redux'
import ApplicationList from '../components/ApplicationList'

const mapStateToProps = (state) => ({
  applications: state.applications.applications,
  isLoading: state.applications.isLoading
})

const Controller = connect(
  mapStateToProps,
)(ApplicationList)

export default Controller
