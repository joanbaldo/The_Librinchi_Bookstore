import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerContainer">
     
      <div class="social">
        <Link to="https://www.linkedin.com/in/joanbaldo/" target="_blank">
          <img className="logo" src="../src/assets/TLB_Li.jpg" alt="LinkedInJoan"></img>
        </Link>
      </div>
      <span class="copyright">Copyright <strong> The Librinchis Bookstore </strong>   2023</span>
    </div>

  )
}

export default Footer