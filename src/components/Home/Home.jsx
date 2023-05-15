import React from 'react'
import "./Home.scss"

const Home = () => {
  return (
    <div className='dHome'>
      <div className='catTit'>BOOK CATEGORIES</div>

      <div className='dcat'>
      <div className='dcatlabel'>Romantic</div>
      <img src="../src/assets/C_Romantic.jpg" alt="Romantic" />
      </div>

      <div className='dcat'>
      <div className='dcatlabel'>SciFi</div>
      <img src="../src/assets/C_Scify.jpg" alt="Scify" />
      </div>

      <div className='dcat'>
      <div className='dcatlabel'>Drama</div>
      <img src="../src/assets/C_Drama.jpg" alt="Drama" />
      </div>

      <div className='dcat'>
      <div className='dcatlabel'>Fantasy</div>
      <img src="../src/assets/C_Fantasy.jpg" alt="Fantasy" />
      </div>

      <div className='dcat'>
      <div className='dcatlabel'>Biography</div>
      <img src="../src/assets/C_Biography.jpg" alt="Romantic" />
      </div>

    </div>
  )
}

export default Home