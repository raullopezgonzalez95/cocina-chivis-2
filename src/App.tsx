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
            <header className="app-header" style={{
                background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
                padding: '1rem 1rem',
                borderRadius: '0 0 30px 30px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
            }}>
                <h1 style={{
                    fontFamily: '"Pacifico", cursive, sans-serif',
                    fontSize: '3rem',
                    color: '#fff8e1',
                    letterSpacing: '2px',
                    textShadow: '2px 4px 12px #b8860b'
                }}>
                    Menú
                </h1>
            </header>

            <main>
                <MenuList items={menuItems} />
            </main>
            
            <ScrollToFooter />
            
            <footer id="app-footer">
                <PaymentItem />
            </footer>
        </div>
    );
};

export default App;