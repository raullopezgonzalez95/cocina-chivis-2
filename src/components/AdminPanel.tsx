import React, {useState} from 'react';
import {MenuItem} from '../types/types';

interface AdminPanelProps {
    items: MenuItem[];
    onAdd: (item: Omit<MenuItem, 'id'>) => void;
    onUpdate: (item: MenuItem) => void;
    onCancel: () => void;
    editingItem?: MenuItem | null;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
                                                   items,
                                                   onAdd,
                                                   onUpdate,
                                                   onCancel,
                                                   editingItem
                                               }) => {
    const [formData, setFormData] = useState<Omit<MenuItem, 'id'>>(
        editingItem || {
            name: '',
            description: '',
            price: 0,
            category: '',
            image: ''
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) || 0 : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingItem) {
            onUpdate({...formData, id: editingItem.id});
        } else {
            onAdd(formData);
        }
    };

    return (
        <div className="admin-panel">
            <h2>{editingItem ? 'Editar Elemento' : 'Agregar Nuevo Elemento'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Categoría:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>URL de la imagen (opcional):</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button type="submit">{editingItem ? 'Actualizar' : 'Agregar'}</button>
                    {editingItem && (
                        <button type="button" onClick={onCancel}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AdminPanel;