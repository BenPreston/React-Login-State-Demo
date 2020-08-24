import React from 'react'
import DefaultLayout from '../../layout'
import UsersList from './usersList/usersList'

const Home = () => {
  const title = 'Home'
  return (
    <DefaultLayout title={title} private>
      <UsersList />
    </DefaultLayout>
  )
}
export default Home
