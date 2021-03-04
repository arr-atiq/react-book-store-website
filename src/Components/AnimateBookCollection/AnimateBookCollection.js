import React from 'react';
import './AnimateBookCollection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faBox, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';


const AnimateBookCollection = () => {
    return (
        <div>
            <div class="project-counter">
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon={faUser} /></i>
                        <p id="number1" class="number">125,663</p>
                        <span></span>
                        <p>Happy Customers</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faBookOpen} /></i>
                        <p id="number2" class="number">50672+</p>
                        <span></span>
                        <p>Book Collections</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faBox} /></i>
                        <p id="number3" class="number">1562</p>
                        <span></span>
                        <p>Our Stores</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faFeatherAlt} /></i>
                        <p id="number2" class="number">457</p>
                        <span></span>
                        <p>Famous Writers</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AnimateBookCollection;