import React, {useState} from 'react';
import {MenuItem} from './types/types';
import MenuList from './components/MenuList';
import PaymentItem from './components/PaymentItem';
import './App.css';

const initialMenuItems: MenuItem[] = [
    {
        id: 1,
        name: '🥣 Desayunos',
        description: 'Café, frijoles y huevos al gusto (2 huevos)',
        options: ['Jamón', 'Chorizo', 'Omelette', 'Salchichas'],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 2,
        name: 'Licuados',
        description: 'Medio litro',
        options: ['Chocolate', 'Plátano', 'Manzana', 'Avena'],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 3,
        name: 'Tortas',
        description: '',
        options: ['Huevo con chorizo', 'Huevo con jamón', 'Salchichas'],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 4,
        name: 'Tortas de milanesa',
        description: '',
        options: ['Pollo', 'Cerdo'],
        price: 35,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 5,
        name: 'Orden de sincronizadas (2)',
        description: 'Jamón y queso',
        options: [],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 6,
        name: 'Chilaquiles',
        description: 'Verdes o rojos',
        options: ['Con huevo', 'Con pollo'],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 7,
        name: 'Orden de hotdogs (2)',
        description: '',
        options: [],
        price: 30,
        category: ['Desayunos', 'Comidas'],
        image: ''
    },
    {
        id: 20,
        name: '🍽 Comida',
        description: '',
        options: ['🍚 Arroz', '🥣 Sopa aguada', '🍲 1 Guisado a elegir (se ofrecen 2 guisados distintos cada día)', '🫗 1 vaso de agua de sabor del día (medio litro)', '🌮 Tortillas'],
        price: 35,
        category: ['Comidas'],
        image: ''
    }
];

const App: React.FC = () => {
    const [menuItems] = useState<MenuItem[]>(initialMenuItems);


    return (
        <div className="app">
            <header className="app-header">
                <h1>Menú</h1>
            </header>

            <main>
                <MenuList items={menuItems} />
            </main>

            <PaymentItem />
        </div>
    );
};

export default App;