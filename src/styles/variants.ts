export const VARIANT_COLOR = {
  'yellow-dark': 'yellow-dark',

  yellow: 'yellow',

  'yellow-light': 'yellow-light',

  'purple-dark': 'purple-dark',

  purple: 'purple',

  'purple-light': 'purple-light',

  'base-title': 'base-title',

  'base-subtitle': 'base-subtitle',

  'base-text': 'base-text',

  'base-label': 'base-label',

  'base-hover': 'base-hover',

  'base-button': 'base-button',

  'base-input': 'base-input',

  'base-card': 'base-card',

  background: 'background',

  white: 'white',
} as const

export interface VariantColorProps {
  variantColor: keyof typeof VARIANT_COLOR
}
