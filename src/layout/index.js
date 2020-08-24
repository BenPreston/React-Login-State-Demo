import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { UsersContainer } from './styles'
import PropTypes from 'prop-types'

const DefaultLayout = (props) => {
  return (
    <>
      <Header title={props.title} btn={props.private} />
      <UsersContainer>
        <div className="container">{props.children}</div>
      </UsersContainer>
      <Footer />
    </>
  )
}
DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  private: PropTypes.bool,
  children: PropTypes.any
}
export default DefaultLayout
