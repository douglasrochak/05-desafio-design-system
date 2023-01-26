import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/douglasrochak.png',
    alt: 'Douglas Rochak',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj = {}

export const WithFallback: StoryObj = {
  args: {
    src: undefined,
    alt: '',
  },
}
