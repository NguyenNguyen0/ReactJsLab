import './Footer.css'

function Footer() {
  return (
    <footer className="d-flex footer text-light rounded-top-3">
      <div className="about-us ms-3">
        <div>
          <span className='fs-3 fw-bold'>About Us</span>
          <p>
            Welcome to our website, a wonderful place to explore how to cook like
            a pro.
          </p>
          <div>
            <input type="text" />
            <button>Send</button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="me-2 fs-4">Chefify</span>
          <span className="me-2">2023 Chefify Company</span>
          <span>Term of Sevicel Privary Policy</span>
        </div>
      </div>

      <div className="learn-more d-flex flex-column justify-content-between me-3">
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
      <div className="recipes me-3">
        <ul>
          <li>Reicpes</li>
          <li>What to Cook This Week</li>
          <li>Pasta</li>
          <li>Dinner</li>
          <li>Healthy</li>
          <li>Vegetarian</li>
          <li>Vegan</li>
          <li>Christmas</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer