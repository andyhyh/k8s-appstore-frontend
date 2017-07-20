import { connect } from 'react-redux'
import PackageItem from '../components/PackageItem'

const mapStateToProps = (state) => ({
  isLoading: state.packages.itemIsLoading,
  item: state.packages.item
})

const Controller = connect(
  mapStateToProps,
)(PackageItem)

export default Controller
