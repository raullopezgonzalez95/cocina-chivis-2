import React from 'react';
import {MenuItem} from '../types/types';

interface MenuItemProps {
    item: MenuItem;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <div className="menu-item">
            <div className="item-image">
                {item.image && <img src={item.image} alt={item.name} />}
            </div>
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                {item.options && item.options.length > 0 && (
                    <div className="options-list">
                        <ul>
                            {item.options.map((option, index) => (
                                <li key={index} className="option-item">
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <span className="price">${item.price.toFixed(2)}</span>
                <span className="category">{item.category}</span>
            </div>
        </div>
    );
};


export default MenuItemComponent;
