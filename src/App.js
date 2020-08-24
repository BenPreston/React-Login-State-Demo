import React, { Component } from 'react'
import { withRouter } from 'react-router'
import RouterComponent from './router'
import GlobalStyle from './theme/injectGlobal'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <RouterComponent />
      </>
    )
  }
}
export default withRouter(App)
