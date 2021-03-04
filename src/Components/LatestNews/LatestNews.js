import React from 'react';
import image from '../../Images/gray.jpg';
import './LatestNews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const LatestNews = () => {
    return (
        <main>
            <div className="latest-title">
                <h1>Latest News</h1>
            </div>
            <div className="latest-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate veniam totam, fugiat distinctio blanditiis maiores veritatis explicabo doloremque dolorum!</p>
            </div>
            <div className="latest-product">
                <div className="latest-main">
                    <div className="card-latest-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="latest-all-items">
                        <div className="latest-card-body">
                            <p>Benefits of Reading: Smart, Diligent, Happy</p>
                            <div className="name">
                                <h3>Steffanny Wiliam</h3>
                                <span>5 Augest 2021</span>
                            </div>
                            <p className="latest-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            <div className="anchor">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="latest-main">
                    <div className="card-latest-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="latest-all-items">
                        <div className="latest-card-body">
                            <p>Benefits of Reading: Smart, Diligent, Happy</p>
                            <div className="name">
                                <h3>Steffanny Wiliam</h3>
                                <span>5 Augest 2021</span>
                            </div>
                            <p className="latest-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            <div className="anchor">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="latest-main">
                    <div className="card-latest-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="latest-all-items">
                        <div className="latest-card-body">
                            <p>Benefits of Reading: Smart, Diligent, Happy</p>
                            <div className="name">
                                <h3>Steffanny Wiliam</h3>
                                <span>5 Augest 2021</span>
                            </div>
                            <p className="latest-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            <div className="anchor">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="latest-main">
                    <div className="card-latest-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="latest-all-items">
                        <div className="latest-card-body">
                            <p>Benefits of Reading: Smart, Diligent, Happy</p>
                            <div className="name">
                                <h3>Steffanny Wiliam</h3>
                                <span>5 Augest 2021</span>
                            </div>
                            <p className="latest-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil dignissimos cumque exercitationem quisquam atque voluptate itaque iste iure nisi!</p>
                            <div className="anchor">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LatestNews;