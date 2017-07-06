import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import LoginButton from '../components/LoginButton'

const mapStateToProps = (state, ownProps) => (state)

const mapDispatchToProps = (dispatch, ownProps) => ({
  actLogin: () => {
    dispatch({
      "type": "AUTH_REQUEST_LOGIN"
    })
  },
  actLogout: () => {
    dispatch({
      "type": "AUTH_REQUEST_LOGOUT"
    })
  }
})

const LoginController = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)

export default LoginController
