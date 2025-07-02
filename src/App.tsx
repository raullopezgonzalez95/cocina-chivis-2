import React, {useState} from 'react';
import {MenuItem} from './types/types';
import MenuList from './components/MenuList';
import PaymentItem from './components/PaymentItem';
import './App.css';
import { initialMenuItems } from './components/initialMenuItems';

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

            <footer>
                <PaymentItem />
            </footer>
        </div>
    );
};

export default App;