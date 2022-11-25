import { User } from '@prisma/client'
import React from 'react'

export default function Author(user:User) {
  return (
    <>
      <div className="side animate-box">
        <div className="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
          <h2><span>About author</span></h2>
        </div>
        <div className="fh5co-staff">
          <img src="../images/user-2.jpg" alt="Free HTML5 Templates by FreeHTML5.co" />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <ul className="fh5co-social-icons">
            <li><a href="#"><i className="icon-facebook"></i></a></li>
            <li><a href="#"><i className="icon-twitter"></i></a></li>
            <li><a href="#"><i className="icon-dribbble"></i></a></li>
            <li><a href="#"><i className="icon-github"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
