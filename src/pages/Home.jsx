import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style</h1>
          <p>
            Shop the latest trends at amazing prices.
            Find everything you love in one place!
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-image">
          <span>🛍️</span>
        </div>
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-list">
          <div className="category-card">
            <span>👗</span>
            <h3>Fashion</h3>
          </div>

          <div className="category-card">
            <span>📱</span>
            <h3>Electronics</h3>
          </div>

          <div className="category-card">
            <span>⌚</span>
            <h3>Accessories</h3>
          </div>

          <div className="category-card">
            <span>🏠</span>
            <h3>Home Decor</h3>
          </div>
        </div>
      </section>

      <section className="offer">
        <h2>Big Shopping Sale!</h2>
        <p>Get amazing deals on your favourite products.</p>
        <Link to="/products" className="shop-btn">
          Explore Products
        </Link>
      </section>

    </div>
  );
}

export default Home;