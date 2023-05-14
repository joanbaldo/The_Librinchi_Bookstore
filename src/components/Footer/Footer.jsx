import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div class="net">
            <div class="social">
                <Link to="https://www.linkedin.com/in/joanbaldo/" target="_blank">
                    <img className="lilogo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LI Logo"></img>
                </Link>
            </div>
            <span>Made by<strong>The Joan</strong></span>
        </div>
    </div>
  )
}

export default Footer