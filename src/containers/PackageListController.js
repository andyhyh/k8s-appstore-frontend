import { connect } from 'react-redux'
import PackageList from '../components/PackageList'

const mapStateToProps = (state) => ({
  items: state.packages.items,
  isLoading: state.packages.isLoading
})

const Controller = connect(
  mapStateToProps,
)(PackageList)

export default Controller
