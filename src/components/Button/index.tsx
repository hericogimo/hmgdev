import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { PaperPlaneTilt } from 'phosphor-react';

export interface ButtonProps {
    children: ReactNode,
    asChild?: boolean,
    outRing?: boolean,
    onClick?: any,
    className?: string 
}

function ButtonRoot({ children, asChild=false, outRing=false,  className, onClick}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
            "py-3 px-6 bg-green-500 ring-2 ring-green-500 hover:ring-green-400 uppercase hover:bg-green-400 rounded-lg",
            "ease-in duration-150 focus:ring-white text-white relative flex justify-center items-center gap-2",
            {
                "before:h-full before:w-full before:bg-transparent before:ring-green-500 before:hover:ring-green-400": outRing,
                "before:absolute before:right-[-9px] before:top-[9px] before:z-0 before:ring-2 before:rounded-lg": outRing,
                "before:ease-in before:duration-150": outRing,
            },
            className
        )} onClick={onClick}>
            {children}
        </Comp>
    )
}
ButtonRoot.displayName = 'Button.Root'

export interface ButtonIconProps {
    children: ReactNode,
}

function ButtonIcon (props: ButtonIconProps) {
    return (
        <Slot>
            { props.children }
        </Slot>
    )
}
ButtonIcon.displayName = 'Button.Icon'

export const Button = {
    Root: ButtonRoot,
    Icon: ButtonIcon
}