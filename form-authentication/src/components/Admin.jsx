import React from 'react'
import { Link } from 'react-router-dom'
import User from './Users'

const Admin = () => {
  return (
    <section>
      <h1>Admin Page</h1>
      <br />
      {/* <p>You must have been assigned an Admin Role.</p> */}
      <User />
      <br />
      <div className="flexGrow">
        <Link to='/'>Home</Link>
      </div>
    </section>
  )
}

export default Admin
