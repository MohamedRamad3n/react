import React from 'react'
import {NavLink , Outlet} from 'react-router-dom'
function Books() {
  return (
      <div>
         List Books
          <nav>
              <NavLink to="AddNewBook">Add New BooK</NavLink>
              <NavLink to="RelatedBook">Related Book</NavLink>
      </nav>
      <Outlet />
      </div>
  )
}

export default Books