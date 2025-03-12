import { PiStarFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import "./SearchProduct.css";
import "./RangeSlider.css";
import noProduct from "../assets/not-found.png";
import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
function SearchProduct() {
  return (
    <div className="search-product row p-4 mr-4">
      <div className="col-3">
        <FilterSideBar />
      </div>

      <div className="col-9 mr-4">
        <ProductList />
      </div>
    </div>
  );
}

function ProductList() {
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch('https://67c81e210acf98d07084f02e.mockapi.io/recipes')
      .then((data) => data.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {product ? (
        <>
          <div className="product-header">
            <h1>Salad(12)</h1>
            <select name="" id="">
              <option value="">A-Z</option>
            </select>
          </div>
          <div className="recipe-list">
            {product?.map((recipe) => (
              <div key={recipe.id} className="recipe-card p-0">
                <img src={recipe.image} alt={recipe.name} />
                <div className="content-body">
                  <div className="name-wrap">
                    <h3>{recipe.name}</h3>
                    <span className="book-mark-icon">
                      <FaRegBookmark />
                    </span>
                  </div>
                  <div className="card-footer">
                    <span className="time primary-bill">
                      {recipe.time} minutes
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="fs-2 fw-bold">
            Sorry, no results were found for &quot;cakescascsa&quot;
          </h1>

          <img className="not-found-img" src={noProduct} alt="" />

          <div>
            <h2 className="fs-5 fw-light">
              We have all your Independance Day sweets covered.
            </h2>
            <ul className="d-flex flex-wrap justify-content-center recomendation-list">
              <li><button id="recomendation-btn-1">Sweet Cake</button></li>
              <li><button id="recomendation-btn-2">Black Cake</button></li>
              <li><button id="recomendation-btn-3">Pozole Verde</button></li>
              <li><button id="recomendation-btn-4">Healthy food</button></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

function FilterSideBar() {
  const [range, setRange] = useState([30, 50]);

  const handleChange = (index, value) => {
    const newRange = [...range];
    newRange[index] = Number(value);
    if (newRange[0] <= newRange[1]) {
      setRange(newRange);
    }
  }
  return (
    <aside className="d-flex flex-column filter-sidebar">
      <div className="d-flex justify-content-start align-items-center p-3">
        <IoMenu className="mx-3 menu-icon" />
        <h3>Filter</h3>
      </div>

      <div className="accordion">
        <div className="accordion-item" id="type-filter">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Type
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#type-filter"
          >
            <div className="accordion-body">
              <div className="container">
                <div className="row my-2">
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label htmlFor="">Pan-fried</label>
                  </div>
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label htmlFor="">Stir-fried</label>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label htmlFor="">Grilled</label>
                  </div>
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label className="justify-self-end" htmlFor="">
                      Roasted
                    </label>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label htmlFor="">Sauteed</label>
                  </div>
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label className="justify-self-end" htmlFor="">
                      Baked
                    </label>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label htmlFor="">Steamed</label>
                  </div>
                  <div className="col-6">
                    <input className="me-2 p-1" type="checkbox" />
                    <label htmlFor="">Stewed</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="time-filter">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Time
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show border-0"
            data-bs-parent="#time-filter"
          >
            <div className="accordion-body">
              {/* dual-range-slider */}
              <div className="container">
                <div className="range-container">
                  <span>{range[0]} minutes</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={range[0]}
                      onChange={(e) => handleChange(0, e.target.value)}
                      className="slider" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={range[1]}
                      onChange={(e) => handleChange(1, e.target.value)}
                      className="slider" />

                    <div
                      className="slider-track"
                      style={{
                        left: `${(range[0] / 100) * 100}%`,
                        width: `${((range[1] - range[0]) / 100) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="">{range[1]} minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="rating-filter">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Rating
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show"
            data-bs-parent="#rating-filter"
          >
            <div className="accordion-body">
              <div className="container">
                <ul className="rating-list">
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill />
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill />
                      <PiStarFill />
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <PiStarFill className="yellow-star" />
                      <PiStarFill className="yellow-star" />
                      <PiStarFill />
                      <PiStarFill />
                      <PiStarFill />
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <PiStarFill className="yellow-star" />
                      <PiStarFill />
                      <PiStarFill />
                      <PiStarFill />
                      <PiStarFill />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <button className="filter-apply-btn">Apply</button>
      </div>
    </aside>
  );
}

export default SearchProduct;
