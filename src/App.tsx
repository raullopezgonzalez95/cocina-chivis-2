import React, { useState } from 'react';
import { MenuItem, User, UserRole } from './types/types';
import MenuList from './components/MenuList';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import './App.css';

const initialMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Pasta Carbonara',
    description: 'Pasta con salsa cremosa de huevo, queso pecorino, panceta y pimienta negra.',
    price: 12.99,
    category: 'Pastas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
  },
  {
    id: '2',
    name: 'Ensalada César',
    description: 'Lechuga romana, croutones, queso parmesano y aderezo césar.',
    price: 8.99,
    category: 'Ensaladas',
    image: 'https://www.gourmet.cl/wp-content/uploads/2016/09/EnsaladaCesar2.webp'
  },
  {
    id: '3',
    name: 'Tiramisú',
    description: 'Postre italiano con capas de bizcocho empapado en café y crema de mascarpone.',
    price: 6.99,
    category: 'Postres',
    image: 'https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/7f45d6f8807ebc775928651a3398dce9.webp'
  }
];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [user, setUser] = useState<User>({ username: 'guest', role: 'guest' });
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setShowLogin(false);
    if (loggedInUser.role === 'admin') {
      setShowAdminPanel(true);
    }
  };

  const handleLogout = () => {
    setUser({ username: 'guest', role: 'guest' });
    setEditingItem(null);
    setShowAdminPanel(false);
  };

  const handleAddItem = (newItem: Omit<MenuItem, 'id'>) => {
    const itemWithId = {
      ...newItem,
      id: Date.now().toString()
    };
    setMenuItems([...menuItems, itemWithId]);
    setShowAdminPanel(false);
  };

  const handleUpdateItem = (updatedItem: MenuItem) => {
    setMenuItems(menuItems.map(item =>
        item.id === updatedItem.id ? updatedItem : item
    ));
    setEditingItem(null);
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setShowAdminPanel(true);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
      <div className="app">
        <header className="app-header">
          <h1>Menú del Restaurante</h1>
          <div className="user-controls">
            <span>Modo: {user.role === 'admin' ? 'Administrador' : 'Invitado'}</span>
            {user.role === 'guest' ? (
                <button onClick={() => setShowLogin(true)}>Admin Login</button>
            ) : (
                <>
                  {user.role === 'admin' && (
                      <button onClick={() => setShowAdminPanel(!showAdminPanel)}>
                        {showAdminPanel ? 'Ver Menú' : 'Administrar Menú'}
                      </button>
                  )}
                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </>
            )}
          </div>
        </header>

        <main>
          {showLogin ? (
              <Login onLogin={handleLogin} />
          ) : showAdminPanel || editingItem ? (
              <AdminPanel
                  items={menuItems}
                  onAdd={handleAddItem}
                  onUpdate={handleUpdateItem}
                  onCancel={() => {
                    setEditingItem(null);
                    setShowAdminPanel(false);
                  }}
                  editingItem={editingItem}
              />
          ) : (
              <MenuList
                  items={menuItems}
                  onItemEdit={handleEditItem}
                  onItemDelete={handleDeleteItem}
                  isAdmin={user.role === 'admin'}
              />
          )}
        </main>
      </div>
  );
};

export default App;