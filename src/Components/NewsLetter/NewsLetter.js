import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <div className="newsTitle">
                <h1>Subscribe our newsletter for newest books update</h1>
            </div>
            <form className="field" action="">
                <input type="text" />
                <button>Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;