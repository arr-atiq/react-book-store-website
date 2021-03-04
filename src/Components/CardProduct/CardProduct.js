import React from 'react';
import './CardProduct.css';
import image from '../../Images/books.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const CardProduct = () => {
    return (
        <div className="card-product">
            <div className="card-main">
                <div className="all-items">
                    <div className="card-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Second [Part I]</h1>
                        <div className="btnDiv">
                            <button className="btn">Birthday</button>
                            <button className="btn">Thriller</button>
                            <button className="btn">Horror</button>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                        <h3>Kevin Smiley</h3>
                        <br />
                        <div className="mainbtn-pricesDiv">
                            <button className="cart-btn"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                            <h1>$18.50</h1>
                            <p><s>$28.50</s></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-main">
                <div className="all-items">
                    <div className="card-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Terrible Madness</h1>
                        <div className="btnDiv">
                            <button className="btn">Birthday</button>
                            <button className="btn">Thriller</button>
                            <button className="btn">Horror</button>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                        <h3>Kevin Smiley</h3>
                        <br />
                        <div className="mainbtn-pricesDiv">
                            <button className="cart-btn"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                            <h1>$18.50</h1>
                            <p><s>$28.50</s></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-main">
                <div className="all-items">
                    <div className="card-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Rework</h1>
                        <div className="btnDiv">
                            <button className="btn">Birthday</button>
                            <button className="btn">Thriller</button>
                            <button className="btn">Horror</button>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                        <h3>Kevin Smiley</h3>
                        <br />
                        <div className="mainbtn-pricesDiv">
                            <button className="cart-btn"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                            <h1>$18.50</h1>
                            <p><s>$28.50</s></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;