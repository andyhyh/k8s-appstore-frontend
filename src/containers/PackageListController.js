import { connect } from 'react-redux'
import { selectPackage, getAllPackages } from '../actions/packages'
import PackageList from '../components/PackageList'

const mapStateToProps = (state) => ({
  items: state.packages.items,
  isLoading: state.packages.isLoading
})

const mapDispatchToProps = {
  actSelectPackage: selectPackage,
  getAllPackages: getAllPackages
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList)

export default Controller
