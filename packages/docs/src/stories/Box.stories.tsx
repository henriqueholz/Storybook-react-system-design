import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@henrique-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        children: <Text>Testando o elemento Box</Text>,{' '}
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
