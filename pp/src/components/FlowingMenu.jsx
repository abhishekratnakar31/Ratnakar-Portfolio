import React, { useRef } from 'react';
import './FlowingMenu.css';

const FlowingMenu = ({
    items = [],
    textColor = '#ffffff',
    bgColor = '#060010',
    borderColor = '#ffffff'
}) => {
    const containerRef = useRef(null);

    return (
        <div
            ref={containerRef}
            className="flowing-menu-container"
            style={{ backgroundColor: bgColor, overflowY: 'auto' }}
        >
            <div className="flowing-menu-content">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="menu-item"
                        style={{
                            borderColor: borderColor,
                            height: '150px'
                        }}
                    >
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="menu-item-link"
                            style={{ color: textColor }}
                        >
                            <span className="text-4xl md:text-6xl">{item.text}</span>
                        </a>

                        {item.image && (
                            <div className="menu-item-image-wrapper">
                                <img src={item.image} alt={item.text} className="menu-item-image" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlowingMenu;
