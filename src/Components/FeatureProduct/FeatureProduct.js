import React from 'react';
import image from '../../Images/gray.jpg';
import './FeatureProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const FeatureProduct = () => {
    return (
        <main>
            <div className="feature-title">
                <h1>Featured Product</h1>
            </div>
            <div className="feature-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate veniam totam, fugiat distinctio blanditiis maiores veritatis explicabo doloremque dolorum!</p>
            </div>
            <div className="feature-product">
                <div className="feature-main">
                    <div className="card-feature-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="feature-all-items">
                        <div className="feature-card-body">
                            <p className="best-p">BEST SELLER</p>
                            <h1>A Heavy Lift</h1>
                            <h3>Napolion Hill   Business & Strategy</h3>
                            <div className="div-paragraph">
                                <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            </div>
                            <br />
                            <div className="pricesDiv">
                                <h1>$18.50</h1>
                                <p><s>$28.50</s></p>
                                <p>20% OFF</p>
                            </div>
                            <button className="Buy-btn"><FontAwesomeIcon icon={faCartPlus} /> Buy Now</button>
                            <button className="see-btn">See Detail</button>
                        </div>
                    </div>
                </div>
                <div className="feature-main">
                    <div className="card-feature-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="feature-all-items">
                        <div className="feature-card-body">
                            <p className="best-p">BEST SELLER</p>
                            <h1>A Heavy Lift</h1>
                            <h3>Napolion Hill   Business & Strategy</h3>
                            <div className="div-paragraph">
                                <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            </div>
                            <br />
                            <div className="pricesDiv">
                                <h1>$18.50</h1>
                                <p><s>$28.50</s></p>
                                <p>20% OFF</p>
                            </div>
                            <button className="Buy-btn"><FontAwesomeIcon icon={faCartPlus} /> Buy Now</button>
                            <button className="see-btn">See Detail</button>
                        </div>
                    </div>
                </div>
                <div className="feature-main">
                    <div className="card-feature-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="feature-all-items">
                        <div className="feature-card-body">
                            <p className="best-p">BEST SELLER</p>
                            <h1>A Heavy Lift</h1>
                            <h3>Napolion Hill   Business & Strategy</h3>
                            <div className="div-paragraph">
                                <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            </div>
                            <br />
                            <div className="pricesDiv">
                                <h1>$18.50</h1>
                                <p><s>$28.50</s></p>
                                <p>20% OFF</p>
                            </div>
                            <button className="Buy-btn"><FontAwesomeIcon icon={faCartPlus} /> Buy Now</button>
                            <button className="see-btn">See Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FeatureProduct;