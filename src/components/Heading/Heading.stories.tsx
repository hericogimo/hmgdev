import { Heading, HeadingProps } from ".";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

export const Default = {}

export const Small = {
    args: {
        size: 'sm'
    }
} as StoryObj<HeadingProps>

export const Large = {
    args: {
        size: 'lg'
    }
} as StoryObj<HeadingProps>

export const CustumComponet = {
    args: {
        size: 'lg',
        asChild: true,
        children: (
            <h1>Hello With h1 tag</h1>
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
} as StoryObj<HeadingProps>
