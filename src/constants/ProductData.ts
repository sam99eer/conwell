import product1 from '../assets/products/1.jpg';
import product10 from '../assets/products/10.jpg';
import product10Png from '../assets/products/10.png';
import product11 from '../assets/products/11.jpg';
import product12 from '../assets/products/12.jpg';
import product13 from '../assets/products/13.jpg';
import product14 from '../assets/products/14.jpg';
import product15 from '../assets/products/15.jpg';
import product16 from '../assets/products/16.jpg';
import product2 from '../assets/products/2.jpg';
import product2Png from '../assets/products/2.png';
import product3 from '../assets/products/3.jpg';
import product4 from '../assets/products/4.jpg';
import product4Png from '../assets/products/4.png';
import product5 from '../assets/products/5.jpg';
import product5Png from '../assets/products/5.png';
import product6 from '../assets/products/6.jpg';
import product7 from '../assets/products/7.jpg';
import product8 from '../assets/products/8.jpg';

import { ProductDataModel } from '../models/ProductDataModel';

export const PRODUCT_DATA = [
    {
        key: 'Product_1',
        title: 'Convita-Gold',
        image: [product1],
    },
    {
        key: 'Product_3',
        title: 'Compnil',
        image: [product3],
    },
    {
        key: 'Product_4',
        title: 'Convit',
        image: [product4, product4Png],
    },
    {
        key: 'Product_5',
        title: 'Conpod-200 DT',
        image: [product5Png, product5],
    },
    {
        key: 'Product_2',
        title: 'CO-Rozi',
        image: [product2Png, product2],
    },
    {
        key: 'Product_6',
        title: 'Concet-M',
        image: [product6],
    },
    {
        key: 'Product_7',
        title: 'Condex-Plus',
        image: [product7],
    },
    {
        key: 'Product_8',
        title: 'Condex-AG',
        image: [product8],
    },
    {
        key: 'Product_11',
        title: 'CDNIM-P',
        image: [product11],
    },
    {
        key: 'Product_12',
        title: 'ConRab-DSR',
        image: [product12],
    },
    {
        key: 'Product_13',
        title: 'Cdp-Aqua',
        image: [product14],
    },
    {
        key: 'Product_14',
        title: 'Concef-SB',
        image: [product15],
    },
    {
        key: 'Product_15',
        title: 'Convodin-S',
        image: [product16],
    },
    {
        key: 'Product_10',
        title: 'Cdp',
        image: [product10, product10Png, product13],
    },
] as ProductDataModel[];
