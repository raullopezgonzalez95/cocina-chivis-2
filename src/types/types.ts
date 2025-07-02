export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image?: string;
}

export type UserRole = 'guest' | 'admin';

export interface User {
    username: string;
    role: UserRole;
}
