import { Button, ButtonProps } from ".";
import { Meta, StoryObj } from '@storybook/react';
import { PaperPlaneTilt } from 'phosphor-react'

export default {
    title: 'Components/Button',
    component: Button.Root,
    args: {
        children: [
            'Lorem Ipsum',
            <Button.Icon>
                <PaperPlaneTilt weight="bold"/>
            </Button.Icon>
        ]
    },
    argTypes: {
        outRing: {
            options: [ true, false ],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true
            }
        },
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<ButtonProps>

export const Default = {}

export const WithoutIcon = {
    args: {
        outRing: false,
        children: 'Lorem Ipsum'
    }
} as StoryObj<ButtonProps>

export const OutRing = {
    args: {
        outRing: true
    }
} as StoryObj<ButtonProps>
