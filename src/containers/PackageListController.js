import { connect } from 'react-redux'
import { selectPackage } from '../actions/'
import PackageList from '../components/PackageList'

const getPackages = (items, filter) => {
  console.log("REturning state packages", items);
  return items;
  // switch (filter) {
  //   case 'SHOW_ALL':
  //     return todos
  //   case 'SHOW_COMPLETED':0
  //     return todos.filter(t => t.completed)
  //   case 'SHOW_ACTIVE':
  //     return todos.filter(t => !t.completed)
  //   default:
  //     throw new Error('Unknown filter: ' + filter)
  // }
}

const mapStateToProps = (state) => ({
  items: getPackages(state.packages.items, null),
  inprogress: state.packages.inprogress
})

const mapDispatchToProps = {
  actSelectPackage: selectPackage
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList)

export default Controller
