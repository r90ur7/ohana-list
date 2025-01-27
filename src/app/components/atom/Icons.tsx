"use client";
import { Icon, Image } from '@chakra-ui/react'
import { LockIcon,  SunIcon, UnlockIcon,CheckIcon } from '@chakra-ui/icons';

export const Moon = () => {
    return(
        <Image 
        src="/luaIcon.svg" 
        alt='Lua Icon' 
        />
    )
}
export const Plus = () => {
    return(
        <Image 
        src="/plus.svg" 
        alt='adicionar icone' 
        />
    )
}
export const Trash = () => {
    return(
        <Image 
        src="/trash.svg" 
        alt='Lixeira Iconer icone' 
        />
    )
}
export const Padlock = () => {
    return(
        <LockIcon 
        aria-label='EditIcon icone' 
        />
    )
}
export const PadUnlock = () => {
    return(
        <UnlockIcon 
        aria-label='CloseIcon icone' 
        />
    )
}
export const CheckIco = () => {
    return(
        <Icon
            as={CheckIcon} // Use o ícone de marca de seleção do Chakra UI
            w={2}
            h={2}
            color="white"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
        />
    )
}

export const Sun = () => {
    return(
        <SunIcon w="35px" h="35px" aria-label='Sol icone'/>
    )
}