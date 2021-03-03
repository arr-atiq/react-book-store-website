import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div class="wrapper">
                <div class="search_box">
                    <div class="dropdown">
                        <div class="default_option">Menu</div>
                        <ul>
                            <li>Student</li>
                            <li>Book</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div class="search_field">
                        <input type="text" class="input" placeholder="Search books here" />
                        <i class="fas"><FontAwesomeIcon icon={faSearch} /></i>
                    </div>
                </div>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;