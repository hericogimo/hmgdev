import Logo from "../../../public/Logo"
import { Button } from "../Button"
import { Text } from "../Text"
import { List, Phone, X } from 'phosphor-react'
import { Heading } from "../Heading"
import { Social } from "../Social"
import { useState } from "react"
import clsx from "clsx"

export interface HeaderProps {}

export function Header () {
    const [menu, setMenu] = useState(false);
    const tootleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className={
            clsx(
                "w-full py-4 px-6 flex flex-row items-center md:gap-36 justify-between md:justify-center md:py-8"
            )
        }>
            {/* MOBILE */}
            <div className={
                clsx(
                    "w-64 bg-d-blue-400 h-screen z-20 fixed top-0 left-[-4px] p-7 md:hidden ease-in duration-500 overflow-auto",
                    {
                        "w-0 px-0": !menu,
                    }
                )
            }>
                <div className="w-full flex flex-row justify-between items-center">
                    <Heading size="md" className="uppercase text-green-500">MENU</Heading>
                    <div className="w-8 flex items-center justify-center">
                        <Button.Root 
                            className="bg-transparent ring-transparent border-transparent gap-0 py-2 px-2 focus:bg-transparent"
                            onClick={() => {
                                tootleMenu()
                            }}    
                        >
                            <Button.Icon>
                                <X weight="bold" size={22} color="#fff"/>
                            </Button.Icon>
                        </Button.Root>
                    </div>
                </div>
                
                <div className="w-full py-2 my-10 flex flex-col justify-start items-start gap-8">
                    <Text className="uppercase font-light" size="sm">HOME</Text>
                    <Text className="uppercase font-light" size="sm">QUEM SOU</Text>
                    <Text className="uppercase font-light" size="sm">O QUE FAÇO</Text>
                    <Text className="uppercase font-light" size="sm">PORTFÓLIO</Text>
                </div>

                <Social.All />
            </div>

            <div className="w-8 flex items-center justify-center md:hidden">
                <Button.Root 
                    className="bg-transparent ring-transparent border-transparent gap-0 py-2 px-2 focus:bg-transparent"
                    onClick={() => {
                        tootleMenu()
                    }}
                >
                    <Button.Icon>
                        <List weight="bold" size={22} color="#fff"/>
                    </Button.Icon>
                </Button.Root>
            </div>
            {/* ===== */}

            <Logo />

            {/* DESKTOP */}
            <div className="hidden md:flex w-full py-2 px-4 max-w-lg justify-center flex-row items-center gap-16">
                <Text className="uppercase font-light" size="sm">HOME</Text>
                <Text className="uppercase font-light" size="sm">QUEM SOU</Text>
                <Text className="uppercase font-light" size="sm">O QUE FAÇO</Text>
                <Text className="uppercase font-light" size="sm">PORTFÓLIO</Text>
            </div>
            {/* ===== */}

            {/* MOBILE */}
            <Button.Root className="bg-white text-green-500 rounded-full gap-0 py-0 ring-white px-0 w-10 h-10 md:hidden">
                <Button.Icon>
                    <Phone weight="bold" size={28} className="text-green-500"/>
                </Button.Icon>
            </Button.Root>
            {/* ===== */}

            {/* DESKTOP */}
            <Button.Root className="bg-transparent rounded-full ring-transparent gap-2 py-1 px-1 w-auto hidden hover:bg-transparent hover:ring-gray-300 md:flex" onClick={() => {
                window.open(encodeURI('https://api.whatsapp.com/send?phone=+258856131320&text=Olá Hérico! Ví o seu portfólio'), "_blank")
            }}>
                <Button.Icon>
                    <Phone weight="bold" size={28} className="text-green-500"/>
                </Button.Icon>
                <Text className="font-bold">+258856131320</Text>
            </Button.Root>
            {/* ===== */}
        </div>
    )
}