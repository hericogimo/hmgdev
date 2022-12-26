import { Text, TextProps } from ".";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default = {}

export const Small = {
    args: {
        size: 'sm'
    }
} as StoryObj<TextProps>

export const Large = {
    args: {
        size: 'lg'
    }
} as StoryObj<TextProps>

export const CustumComponet = {
    args: {
        size: 'lg',
        asChild: true,
        children: (
            <p>Hello With p tag</p>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as StoryObj<TextProps>
