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
  },
  {
    id: '002',
    name: 'Expresso Americano',
    coffeeImage: images.ExpressoAmericano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    id: '003',
    name: 'Expresso Cremoso',
    coffeeImage: images.ExpressoCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    id: '004',
    name: 'Expresso Gelado',
    coffeeImage: images.ExpressoGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: '005',
    name: 'Cafe com leite',
    coffeeImage: images.CafeComLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '006',
    name: 'Latte',
    coffeeImage: images.Latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '007',
    name: 'Capuccino',
    coffeeImage: images.Capuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '008',
    name: 'Macchiato',
    coffeeImage: images.Macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '009',
    name: 'Mocaccino',
    coffeeImage: images.Mochaccino,
    description:
      'Café expresso com dalda de chocolate, pouco de leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },

  {
    id: '010',
    name: 'Chocolate quente',
    coffeeImage: images.ChocolateQuente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
  },
  {
    id: '011',
    name: 'Cubano',
    coffeeImage: images.Cubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoolico', 'com leite'],
    price: 9.9,
  },

  {
    id: '012',
    name: 'havaiano',
    coffeeImage: images.Havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial', 'tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: '013',
    name: 'Árabe',
    coffeeImage: images.Arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
  },
  {
    id: '014',
    name: 'Irlandês',
    coffeeImage: images.Irlandes,
    description: 'Bebida a base de café, uísque irlandês, açucar e chantily',
    tags: ['especial', 'tradicional', 'gelado'],
    price: 9.9,
  },
]
