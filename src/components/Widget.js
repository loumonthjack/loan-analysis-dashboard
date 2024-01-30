import React from 'react';
import '../styles/Widget.css';

const Widget = ({ title, children }) => {
    return (
        <div className="graph-widget">
            {title && <h2 className="graph-widget-title">{title}</h2>}
            <div className="graph-container">
                {children || <p>No graph or chart to display</p>}
            </div>
        </div>
    );
};

export default Widget;
