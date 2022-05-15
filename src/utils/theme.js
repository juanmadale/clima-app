import theme from 'styled-theming'

export const primaryTextColor = theme('theme', {
  light: '#212121',
  dark: '#ffffff'
})

export const secondaryTextColor = theme('theme', {
  light: 'rgb(5,82,181,0.6)',
  dark: 'rgb(150,196,252, 0.6)'
})

export const secondaryTextColorHover = theme('theme', {
  light: 'rgb(5,82,181,0.4)',
  dark: 'rgb(150,196,252,0.4)'
})

export const primaryBackgroundColor = theme('theme', {
  light: '#FFF',
  dark: 'rgb(34,36,38)'
})

export const secondaryBackgroundColor = theme('theme', {
  light: '#DEE4E7',
  dark: '#37474f'
})

export const tertiaryBackgroundColor = theme('theme', {
  light: 'rgb(1,51,125)',
  dark: 'rgb(92,164,251)'
})
