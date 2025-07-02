import React from 'react';
import {MenuItem} from '../types/types';

interface MenuItemProps {
    item: MenuItem;
    onEdit?: (item: MenuItem) => void;
    onDelete?: (id: string) => void;
    isAdmin?: boolean;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({item, onEdit, onDelete, isAdmin}) => {
    return (
        <div className="menu-item">
            <div className="item-image">
                {item.image && <img src={item.image} alt={item.name}/>}
            </div>
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">${item.price.toFixed(2)}</span>
                <span className="category">{item.category}</span>
            </div>
            {isAdmin && (
                <div className="item-actions">
                    <button onClick={() => onEdit && onEdit(item)}>Editar</button>
                    <button onClick={() => onDelete && onDelete(item.id)}>Eliminar</button>
                </div>
            )}
        </div>
    );
};

export default MenuItemComponent;
