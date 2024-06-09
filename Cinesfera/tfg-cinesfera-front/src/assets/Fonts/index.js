import { Montserrat, Kanit } from 'next/font/google'

/**
 * 
 *  TIPOGRAFIAS BASE DE LA APP
 * 
 */
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200'],
    style: ['normal']
})

export const kanit = Kanit({
    subsets: ['latin'],
    weight: ['200'],
    style: ['normal']
})


/**
 * 
 *  TIPOGRAFIAS VARIADAS DE LA APP
 * 
 */
export const montserratRegular = Montserrat({
    subsets:    ['latin'],
    weight:     ['400'],
    variable:   '--font-monserratRegular',
    style:      ['normal']
})

export const kanitRegular = Kanit({
    subsets:    ['latin'],
    weight:     ['400'],
    variable:   '--font-kanitRegular',
    style:      ['normal']
})

export const montserratBold = Montserrat({
    subsets:    ['latin'],
    weight:     ['800'],
    variable:   '--font-monserratBold',
    style:      ['normal']
})

export const kanitExtraBold = Kanit({
    subsets:    ["latin"],
    weight:     ['800'],
    variable:   '--font-kanitBold',
    style:      ['normal']
})