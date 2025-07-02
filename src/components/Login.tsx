import React, {useState} from 'react';
import {User} from '../types/types';

interface LoginProps {
    onLogin: (user: User) => void;
    onCancel?: () => void;
}

const Login: React.FC<LoginProps> = ({onLogin, onCancel}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLogin({username: 'admin', role: 'admin'});
        } else {
            onLogin({username: 'guest', role: 'guest'});
        }
    };

    return (
        <div className="login-container">
            <h2>Acceso Administrador</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Ingresar</button>
                    {onCancel && (
                        <button type="button" onClick={onCancel}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
