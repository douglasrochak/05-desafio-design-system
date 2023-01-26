import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, doloribus provident. Dignissimos delectus, suscipit quaerat facere fuga ullam optio, placeat sint dicta ipsa atque? Omnis facere tenetur aliquid accusantium veritatis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
