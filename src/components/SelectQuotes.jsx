import React from 'react';

const SelectQuotes = ({ selectQuotes }) => {
    return (
        <div className="SelectQuotes">
            <button type="submit" onClick={selectQuotes}>Get quote</button>
        </div>
    );
};

export default SelectQuotes;
