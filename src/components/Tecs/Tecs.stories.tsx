import { Tec, TecProps } from ".";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Tecs',
    component: Tec.All,
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
} as Meta<TecProps>

export const Default = {}

export const WithName = {
    args: {
        named: true
    }
} as StoryObj<TecProps>

export const TecJs = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.JS />
                    <Tec.JS named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecTs = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Ts />
                    <Tec.Ts named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecRct = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Rct />
                    <Tec.Rct named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecRctN = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.RctN />
                    <Tec.RctN named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecNode = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Node />
                    <Tec.Node named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecPhp = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Php />
                    <Tec.Php named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecLrv = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Lrv />
                    <Tec.Lrv named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecCig = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Cig />
                    <Tec.Cig named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecWp = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Wp />
                    <Tec.Wp named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecMsql = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Msql />
                    <Tec.Msql named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecPost = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Post />
                    <Tec.Post named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecMongo = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Mongo />
                    <Tec.Mongo named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecAws = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Aws />
                    <Tec.Aws named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>

export const TecGc = {
    decorators: [
        (Story, props) => {
            console.log(props)
            return(
                <div className="flex gap-4">
                    <Tec.Gc />
                    <Tec.Gc named={true}/>
                </div>
            )
        }
    ]
} as StoryObj<TecProps>