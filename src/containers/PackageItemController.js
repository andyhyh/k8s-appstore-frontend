import { connect } from 'react-redux'
import { closePackage, fetchData } from '../actions/packages'
import PackageItem from '../components/PackageItem'

const mapStateToProps = (state) => ({
  isLoading: state.packages.itemIsLoading,
  item: state.packages.item
})

const mapDispatchToProps = {
  actClosePackage: closePackage,
  getData: fetchData
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageItem)

export default Controller
