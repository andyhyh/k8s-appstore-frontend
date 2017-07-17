import { connect } from 'react-redux'
import { closePackage } from '../store/actions'
import PackageItem from '../components/PackageItem'

const getSelectedPackage = (state) => {
  console.log("LOOKING FOR PACKAGE ID ", state.location.payload.id)
  console.log("LOOKING FOR PACKAGE ID ", state.location.type)
  if (state.location.type !== "PACKAGE") {
    return {}
  }
  console.log("LOOKING FOR PACKAGE ID ", state.location.payload.id)
  let i;
  for(i = 0; i < state.packages.items.length; i++) {
    if (state.packages.items[i].newest_chart.Name === state.location.payload.id) {
      console.log("About to return package", state.packages.items[i])
      return state.packages.items[i]
    }
  }
  console.log("About to return package", null)
  return {}
}

const mapStateToProps = (state) => ({
  item: getSelectedPackage(state),
  inprogress: state.packages.inprogress
})

const mapDispatchToProps = {
  actClosePackage: closePackage
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageItem)

export default Controller
