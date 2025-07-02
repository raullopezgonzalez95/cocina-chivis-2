import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'host',
    port: 3320,
    user: 'user',
    password: 'password',
    database: 'database',
    waitForConnections: true,
    connectionLimit: 10,
});

export async function getMenuItems(): Promise<any[]> {
    const [items] = await pool.query(`
    SELECT mi.*, mc.name AS category_name 
    FROM menu_items mi
    JOIN menu_categories mc ON mi.category_id = mc.id
    WHERE mi.is_available = TRUE
    ORDER BY mc.display_order, mi.name
  `);
    return items as any[];
}

export async function login(username: string, password: string) {
    const [users] = await pool.query(
        'SELECT * FROM admin_users WHERE username = ? AND is_active = TRUE',
        [username]
    ) as any;

    if (users.length === 0) {
        throw new Error('Usuario no encontrado');
    }

    const user = users[0];
    const bcrypt = require('bcryptjs');
    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
        throw new Error('Contraseña incorrecta');
    }

    return {
        user: {
            id: user.id,
            username: user.username,
            fullName: user.full_name,
        }
    };
}

export async function addMenuItem(item: Omit<MenuItem, 'id'>) {
    const [result] = await pool.query(
        'INSERT INTO menu_items SET ?',
        [item]
    ) as any;

    const [newItem] = await pool.query(
        'SELECT mi.*, mc.name AS category_name FROM menu_items mi ' +
        'JOIN menu_categories mc ON mi.category_id = mc.id ' +
        'WHERE mi.id = ?',
        [result.insertId]
    );

    // @ts-ignore
    return newItem[0];
}

export async function updateMenuItem(item: MenuItem) {
    await pool.query(
        'UPDATE menu_items SET ? WHERE id = ?',
        [{
            name: item.name,
            description: item.description,
            price: item.price,
            category_id: item.category_id,
            image_url: item.image_url,
            is_available: item.is_available,
            updated_at: new Date()
        }, item.id]
    );

    const [updatedItem] = await pool.query(
        'SELECT mi.*, mc.name AS category_name FROM menu_items mi ' +
        'JOIN menu_categories mc ON mi.category_id = mc.id ' +
        'WHERE mi.id = ?',
        [item.id]
    );

    // @ts-ignore
    return updatedItem[0];
}

export async function deleteMenuItem(id: number) {
    await pool.query(
        'DELETE FROM menu_items WHERE id = ?',
        [id]
    );
}

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    image_url?: string;
    is_available: boolean;
}