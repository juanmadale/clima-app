import theme from 'styled-theming'

export const primaryColor = theme('theme', {
  light: 'rgb(33,33,33)',
  dark: 'rgb(255,255,255)'
})

export const secondaryColor = theme('theme', {
  light: 'rgb(5,82,181,0.6)',
  dark: 'rgb(150,196,252, 0.6)'
})

export const secondaryColorHover = theme('theme', {
  light: 'rgb(5,82,181,0.4)',
  dark: 'rgb(150,196,252,0.4)'
})

export const tertiaryColor = theme('theme', {
  light: 'rgb(255,255,255)',
  dark: 'rgb(34,36,38)'
})

export const quaternaryColor = theme('theme', {
  light: 'rgb(222,228,231)',
  dark: 'rgb(55,71,79)'
})
