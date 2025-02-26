import React from 'react'

function Footer() {
  return (
    <div className='d-flex footer'>
      <div className='about-us'>
        <p>Welcome to our website, a wonderful place to explore how to cook like a pro.</p>
        <div>
          <input type="text" />
          <button>Send</button>
        </div>

        <div>
          Chefify
          <span>2023 Chefify Company</span>
          <span>Term of Sevicel Privary Polycy</span>
        </div>
      </div>
        
      <div className='learn-more'>
        <ul>
          <li>Learn more</li>
          <li>Our Cooks</li>
          <li>See Our Feature</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Shop</li>
          <li>Git Subcription</li>
          <li>Send us feedback</li>
        </ul>
      </div>
      <div className='recipes'>
        <ul>
          <li>Shop</li>
          <li>Git Subcription</li>
          <li>Send us feedback</li>
        </ul>

      </div>
    </div>
  )
}

export default Footer