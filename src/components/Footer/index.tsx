import Logo from "../../../public/Logo"
import { Button } from "../Button"
import { Text } from "../Text"
import { List, Phone } from 'phosphor-react'

export interface FooterProps {}

export function Footer () {
    return (
        <div className="w-full h-80 py-4 flex justify-center flex-col items-center bg-d-blue-500">
            <Logo w="238"/>
            <Text className="uppercase font-medium my-2 text-gray-100" size="lg">Hérico mateus Gimo</Text>
            <div className="h-[1px] w-full max-w-[80%] bg-gray-300"></div>
            <Text className="italic my-2 text-gray-100" size="sm">Obrigado pela atenção dispensada</Text>
        </div>
    )
}