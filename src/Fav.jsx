import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent({ cartItems, handleFavoriteClick, toggleCart, input, setInput, showFavorites }) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Navbar brand */}
                <div className="navbar-brand text-white">
                    <h2>Product Store</h2>
                </div>

                {/* Toggler for mobile menu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible navbar content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex align-items-center ms-auto">
                        {/* Search input */}
                        <input
                            style={{ width: '100%' }}
                            type="text"
                            className="form-control me-2"
                            placeholder="Search products"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        {/* Favorites button */}
                        <button className="btn btn-outline-light me-2" onClick={handleFavoriteClick}>
                            {showFavorites ? "All Products" : "Favorites"}{" "}
                            <FontAwesomeIcon icon={faHeart} className="text-danger" />
                        </button>

                        {/* Cart button */}
                        <button
                            aria-label="Toggle cart visibility"
                            className="btn btn-outline-light position-relative"
                            onClick={toggleCart}
                        >
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                            {cartItems.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
