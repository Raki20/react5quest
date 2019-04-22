import React from 'react';

const DisplayQuotes = ({ quotes }) => {
    return (
        <div className="DisplayQuotes">
            <img src={quotes.image} alt="pic" />
            <ul>
                <li>
                    {quotes.character}
                </li>
                <li>
                    {quotes.quote}
                </li>
            </ul>
        </div>
    );
};

export default DisplayQuotes;
