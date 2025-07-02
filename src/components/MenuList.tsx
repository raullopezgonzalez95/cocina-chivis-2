import React, {useState} from 'react';
import MenuItemComponent from './MenuItem';
import {MenuItem} from '../types/types';

interface MenuListProps {
    items: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({items}) => {
    const [filter, setFilter] = useState<string>('Todos');

    // Flatten all categories into a single array of strings
    const categories = [
        'Todos',
        ...Array.from(
            new Set(
                items.flatMap(item =>
                    Array.isArray(item.category) ? item.category : [item.category]
                )
            )
        ),
    ];

    const filteredItems = filter === 'Todos'
        ? items
        : items.filter(item => Array.isArray(item.category) ? item.category.includes(filter) : item.category === filter);

    return (
        <div className="menu-list">
            <div className="filter-controls">
                <label>Filtrar por categoría:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="items-container">
                {filteredItems.map(item => (
                    <MenuItemComponent
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuList;