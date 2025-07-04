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
            <div className="filter-controls" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                background: 'linear-gradient(90deg,rgb(244, 170, 146) 100%, #fcb69f 100%)',
                padding: '1rem 2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 24px rgba(252,182,159,0.15)'
            }}>
                <label style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'rgb(255, 255, 255)',
                    letterSpacing: '0.05em'
                }}>
                    Categoría:
                </label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '1rem',
                        border: 'none',
                        background: '#fff',
                        color: 'rgb(247, 145, 111)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        boxShadow: '0 2px 8px rgba(211,84,0,0.08)',
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'box-shadow 0.2s'
                    }}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div
                className="items-container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    padding: '1rem 0',
                    borderRadius: '1.5rem',
                    minHeight: '300px',
                }}
            >
                {filteredItems.length === 0 ? (
                    <div
                        style={{
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            color: '#d35400',
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            opacity: 0.7,
                            padding: '2rem 0',
                        }}
                    >
                        No hay platillos en esta categoría 🍽️
                    </div>
                ) : (
                    filteredItems.map(item => (
                        <div
                            key={item.id}
                            style={{
                                background: 'rgb(255, 255, 255)',
                                borderRadius: '1.2rem',
                                boxShadow: '0 4px 18px rgba(116, 73, 31, 0.43)',
                                padding: '1.5rem 1rem',
                                transition: 'transform 0.18s, box-shadow 0.18s',
                                willChange: 'transform',
                                cursor: 'pointer',
                                border: '2px solid #fff',
                                outline: 'none',
                            }}
                        >
                            <MenuItemComponent item={item} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MenuList;