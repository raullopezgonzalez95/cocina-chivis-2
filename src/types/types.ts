export interface MenuItem {
    id: number;
    name: string;
    description: string;
    options?: string[];
    price: number;
    category: string[];
    image?: string;
}

export type UserRole = 'guest' | 'admin';

export interface User {
    username: string;
    role: UserRole;
}
