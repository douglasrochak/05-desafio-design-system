import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xs' },
      xs: { fontSize: '$s' },
      sm: { fontSize: '$m' },
      md: { fontSize: '$d' },
      lg: { fontSize: '$g' },
      xl: { fontSize: '$l' },
      '2xl': { fontSize: '$xl' },
      '4xl': { fontSize: '$xl' },
      '5xl': { fontSize: '$xl' },
      '6xl': { fontSize: '$xl' },
      '7xl': { fontSize: '$xl' },
      '8xl': { fontSize: '$xl' },
      '9xl': { fontSize: '$xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
