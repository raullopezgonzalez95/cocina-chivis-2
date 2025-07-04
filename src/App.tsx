import React, {useState} from 'react';
import {MenuItem} from './types/types';
import MenuList from './components/MenuList';
import PaymentItem from './components/PaymentItem';
import './App.css';
import { initialMenuItems } from './components/initialMenuItems';
import ScrollToFooter from './components/ScrollToFooter';

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
            
            <ScrollToFooter />
            
            <footer id="app-footer">
                <PaymentItem />
            </footer>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default App;