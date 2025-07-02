import React, {useState} from 'react';
import MenuItemComponent from './MenuItem';
import {MenuItem} from '../types/types';

interface MenuListProps {
    items: MenuItem[];
    onItemEdit: (item: MenuItem) => void;
    onItemDelete: (id: string) => void;
    isAdmin: boolean;
}

const MenuList: React.FC<MenuListProps> = ({items, onItemEdit, onItemDelete, isAdmin}) => {
    const [filter, setFilter] = useState<string>('all');

    // @ts-ignore
    const categories = ['all', ...new Set(items.map(item => item.category))];
    const filteredItems = filter === 'all'
        ? items
        : items.filter(item => item.category === filter);

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
                        onEdit={onItemEdit}
                        onDelete={onItemDelete}
                        isAdmin={isAdmin}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuList;