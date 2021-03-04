import React from 'react';
import './Customer.css'
import image from '../../Images/gray.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CustomerSaid = () => {
    return (
        <div>
            <div className="backgroundDiv">
                <div className="customer-title">
                    <h1>Latest News</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate veniam totam, fugiat distinctio blanditiis maiores veritatis explicabo doloremque dolorum!</p>
                </div>
            </div>
            <div className="mainDiv">
                <div className="customer-says">
                    <div className="customer-main">
                        <div className="card-customer-image">
                            <img src={image} alt="" />
                        </div>
                        <div className="customer-all-items">
                            <div className="customer-card-body">
                                <div className="customer-paragraphDiv">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                                    <h1>Johnson Simanungkalit</h1>
                                    <div className="customer-review">
                                        <h4>Faculty of Economies 2021</h4>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="iblank"><FontAwesomeIcon icon={faStar} /></i>
                                        <h5 className="countN">4.8</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-main">
                        <div className="card-customer-image">
                            <img src={image} alt="" />
                        </div>
                        <div className="customer-all-items">
                            <div className="customer-card-body">
                                <div className="customer-paragraphDiv">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                                    <h1>Johnson Simanungkalit</h1>
                                    <div className="customer-review">
                                        <h4>Faculty of Economies 2021</h4>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="iblank"><FontAwesomeIcon icon={faStar} /></i>
                                        <h5 className="countN">4.8</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-main">
                        <div className="card-customer-image">
                            <img src={image} alt="" />
                        </div>
                        <div className="customer-all-items">
                            <div className="customer-card-body">
                                <div className="customer-paragraphDiv">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                                    <h1>Johnson Simanungkalit</h1>
                                    <div className="customer-review">
                                        <h4>Faculty of Economies 2021</h4>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="istar"><FontAwesomeIcon icon={faStar} /></i>
                                        <i className="iblank"><FontAwesomeIcon icon={faStar} /></i>
                                        <h5 className="countN">4.8</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSaid;