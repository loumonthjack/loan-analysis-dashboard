import React from 'react';
import './Widget.css';

const Widget = ({ title, children }) => {
    return (
        <div className="graph-widget">
            {title && <h2 className="graph-widget-title">{title}</h2>}
            <div className="graph-container">
                {children || <p>No graph provided</p>}
            </div>
        </div>
    );
};

export default Widget;
