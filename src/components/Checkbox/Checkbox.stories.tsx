import { Checkbox, CheckboxProps } from ".";
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [
        (Story) => {
            return (
                <div className="flex gap-2 items-center justify-start">
                    {Story()}
                    <Text size="sm">Lembrar de min por 30 dias</Text> 
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default = {}