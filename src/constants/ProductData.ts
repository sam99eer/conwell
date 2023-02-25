import product10Png from '../assets/products/10.png';
import product12Png from '../assets/products/12.png';
import product17Png from '../assets/products/17.png';
import product18Png from '../assets/products/18.png';
import product19Png from '../assets/products/19.png';
import product2Png from '../assets/products/2.png';
import product4Png from '../assets/products/4.png';
import product5Png from '../assets/products/5.png';
import product9Png from '../assets/products/9.png';

import { ProductDataModel } from '../models/ProductDataModel';

export const PRODUCT_DATA = [
    {
        key: 'Product_1',
        title: 'Convita-Gold',
        image: [product17Png],
        description:
            'Convita Gold is a smart calcium capsule that helps to increase bone formation, bone mineralisation, and improves bone health. It also fulfils the need of calcium in our body.',
    },

    {
        key: 'Product_2',
        title: 'Cdp-Aqua',
        image: [product19Png],
        description:
            'Cdp-Aqua helps in various painful and inflammatory conditions. It is a very effective drug in acute migraine attacks. It is safe and effective option for control of postoperative pain, effective and safe for postoperative analgesia in orthopaedic surgery.',
    },

    {
        key: 'Product_3',
        title: 'Conpod-200 DT',
        image: [product18Png, product5Png],
        description:
            'Conpod-200 DT tablets targets the infection directly. It is highly active against the gram positive bacteria especially streptococci and staphlyococci species. It helps in treating urinary tract infections, respiratory tract infections, skin and soft strcuture infections, ano-rectal infections in women, utheral and cervical gonorrhea, etc.',
    },
    {
        key: 'Product_4',
        title: 'CO-Rozi',
        image: [product2Png],
        description:
            'CO-Rozi tablets are very effective for treatment of joint pain. It contains anti-inflammatory and antioxidants. It ensures pain free moblity.',
    },
    {
        key: 'Product_5',
        title: 'ConRab-DSR',
        image: [product12Png],
        description:
            'ConRab-DSR capsules helps in curing gastric / duodenal ulcers, acid peptic disorder, heart burn, GERD, Dypepsia, Erosive Esophagitis, etc.',
    },
    {
        key: 'Product_6',
        title: 'Convit',
        image: [product4Png],
        description:
            'Convit is a syrup which will help you to return to your normal health quickly. It facilitates tissue healing and protects vital organs, enhances metablic processes, improves physcial and mental stamina, helps to overcome nutritional deficiency, and many more benefits of taking this syrup.',
    },

    {
        key: 'Product_7',
        title: 'Cdp-SP',
        image: [product9Png],
        description:
            'Cdp-SP heals lower pain, muscular and skeletal pain, osteoarthritis, rheumatoid arthritis, dental pain, etc. It is the knock down for the pain and inflammation. Take it twice a day to get relieve from the pain.',
    },
    {
        key: 'Product_8',
        title: 'Cdp',
        image: [product10Png],
        description:
            'Cdp tablets are helpful in reducing inflammation from where it arises. It helps in curing pain and inflammation, musculoskeletal disorders, dislocations and fractures, and osteoarthritis.',
    },
] as ProductDataModel[];
