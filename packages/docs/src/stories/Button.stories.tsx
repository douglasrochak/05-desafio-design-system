import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: <Text>Send</Text>,
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
    children: <Text>Create New</Text>,
  },
}

export const Tertiary: StoryObj = {
  args: {
    variant: 'tertiary',
    children: <Text>Cancel</Text>,
  },
}

export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj = {
  args: {
    children: (
      <>
        <Text>Proximo passo</Text>
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}
