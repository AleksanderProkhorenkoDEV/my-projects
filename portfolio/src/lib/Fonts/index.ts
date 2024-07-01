import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200'],
    style: ['normal']
})

export const montserratRegular = Montserrat({
    subsets:    ['latin'],
    weight:     ['400'],
    variable:   '--font-monserratRegular',
    style:      ['normal']
})

export const montserratBold = Montserrat({
    subsets:    ['latin'],
    weight:     ['800'],
    variable:   '--font-monserratBold',
    style:      ['normal']
})
