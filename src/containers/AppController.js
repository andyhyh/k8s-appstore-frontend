import { connect } from 'react-redux'
import { closePackage } from '../actions/'
import App from './App'


const mapStateToProps = (state) => ({
  locationType: state.location.type,
  locationPayload: state.location.payload
})

const mapDispatchToProps = {
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default Controller
