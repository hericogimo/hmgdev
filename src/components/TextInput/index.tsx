import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode,
}

function TextInputRoot ({ children }: TextInputRootProps) {
    return (
        <div className="w-full py-3 px-7 rounded-xl font-light bg-gray-300 ring-gray-300 outline-none focus-within:ring-2 focus-within:ring-gray-200 focus-within:bg-gray-400 ease-in duration-100 flex items-center gap-3">
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput (props: TextInputProps) {
    return (
        <input 
        className={clsx(
            'bg-transparent rounded-none outline-none flex-1 text-white placeholder-gray-200 text-md',
        )} 
        {...props}
    />
    )
}

TextInputInput.displayName = 'TextInput.Input';

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon (props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-200'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}