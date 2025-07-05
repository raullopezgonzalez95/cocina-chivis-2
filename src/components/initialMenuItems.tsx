import { MenuItem } from '../types/types';

const tortaSalchicha = require('./img/torta_salchicha.JPEG');
const tortaMilansesa = require('./img/torta_milanesa.JPEG');
const chilaquiles = require('./img/chilaquiles.JPEG');
const hotdogs = require('./img/hotdogs.JPEG');

export const initialMenuItems: MenuItem[] = [
    {
        id: 1,
        name: 'Desayuno',
        description: 'Café, frijoles y huevos al gusto (2 huevos)',
        options: ['Jamón', 'Chorizo', 'Omelette', 'Salchichas'],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 2,
        name: 'Licuado',
        description: 'Medio litro',
        options: ['Chocolate', 'Plátano', 'Manzana', 'Avena'],
        price: 30,
        category: ['Desayunos'],
        image: ''
    },
    {
        id: 3,
        name: 'Torta',
        description: '',
        options: ['Huevo con chorizo', 'Huevo con jamón', 'Salchichas'],
        price: 30,
        category: ['Desayunos'],
        image: tortaSalchicha
    },
    {
        id: 4,
        name: 'Torta de milanesa',
        description: '',
        options: ['Pollo', 'Cerdo'],
        price: 35,
        category: ['Desayunos'],
        image: tortaMilansesa
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
        image: chilaquiles
    },
    {
        id: 7,
        name: 'Orden de hotdogs (2)',
        description: '',
        options: [],
        price: 30,
        category: ['Desayunos', 'Comidas'],
        image: hotdogs
    },
    {
        id: 20,
        name: 'Comida',
        description: '',
        options: [
            'Arroz', 
            'Sopa aguada', 
            '1 Guisado a elegir (se ofrecen 2 guisados distintos cada día)', 
            '1 vaso de agua de sabor del día (medio litro)', 
            'Tortillas'
        ],
        price: 35,
        category: ['Comidas'],
        image: ''
    }
];
