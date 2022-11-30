import { images } from './images'

import { Coffee } from '../contexts/OrderContext'

export const coffees: Coffee[] = [
  {
    id: '001',
    name: 'Expresso Tradicional',
    coffeeImage: images.ExpressoTradicional,
    description: 'O tradicional café feito com água quente e grãos muídos',
    tags: ['tradicional'],
    price: 9.9,
    selected: false,
    quantity: 0,
  },
  {
    id: '002',
    name: 'Expresso Americano',
    coffeeImage: images.ExpressoAmericano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    selected: false,
    quantity: 0,
  },
  {
    id: '003',
    name: 'Expresso Cremoso',
    coffeeImage: images.ExpressoCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    selected: false,
    quantity: 0,
  },
  {
    id: '004',
    name: 'Expresso Gelado',
    coffeeImage: images.ExpressoGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    selected: false,
    quantity: 0,
  },
  {
    id: '012',
    name: 'havaiano',
    coffeeImage: images.Havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial', 'tradicional', 'gelado'],
    price: 9.9,
    selected: false,
    quantity: 0,
  },
]
