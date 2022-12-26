import { Social, SocialProps } from ".";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Socials',
    component: Social.All,
    args: {
        named: false
    },
    argTypes: {
        named: {
            options: [true, false],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<SocialProps>

export const Default = {}

export const SocialGit = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Social.Git />
                    <Social.Git />
                </div>
            )
        }
    ]
} as StoryObj<SocialProps>

export const SocialSapp = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Social.Sapp />
                    <Social.Sapp />
                </div>
            )
        }
    ]
} as StoryObj<SocialProps>

export const SocialFb = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Social.Fb />
                    <Social.Fb />
                </div>
            )
        }
    ]
} as StoryObj<SocialProps>

export const SocialTwit = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Social.Twit />
                    <Social.Twit />
                </div>
            )
        }
    ]
} as StoryObj<SocialProps>