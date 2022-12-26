import { TextInput, TextInputRootProps } from ".";
import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <EnvelopeClosedIcon />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Digite o seu nome"/>
        ]
    }
} as Meta<TextInputRootProps>

export const Default = {}

export const WithoutIcon = {
    args: {
        children: (
            <TextInput.Input placeholder="Digite o seu nome"/>
        )
    }
} as StoryObj
