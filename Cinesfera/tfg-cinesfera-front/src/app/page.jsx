import UniversalStudios from '../assets/images/UniversalStudios.png'
import WarnerBros from '../assets/images/WarnerBros.png'
import style from '@/assets/styles/Home/home.module.css'
import Paramount from '../assets/images/Paramount.png'
import Carrusel from '@/components/Sliders/Carrusel'
import { upComing } from "@/lib/Requests/tmbd_api"
import Slider from '@/components/Sliders/Hero'
import TitleSection from '@/components/Title'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function Index() {

    const getData = async () => {
        const data = await upComing()
        return data
    }

    return (
        <div className={style.div}>
            <Suspense fallback={<p>Loading</p>}>
                <Slider 
                    getData={getData()}
                    label={'View more'} />
            </Suspense>
            <div className={style.principalDiv}>
                <div className={style.divImages}>
                    <Image src={UniversalStudios} alt='Universal Studios' className={style.imageUniversalStudios} />
                    <Image src={WarnerBros} alt='Warner Bros' className={style.imageWarnerBros} />
                    <Image src={Paramount} alt='Paramount' className={style.imageParamount} />
                </div>
                <TitleSection
                    word1={'about'}
                    word2={'us'} />
                <p className={style.paragraph}>Welcome to our platform! As avid cinema fans, we're thrilled to introduce
                    you to our website dedicated to the latest blockbuster movies and top-grossing
                    series. Founded by two passionate movie buffs, our platform is a labor of love born
                    from our shared enthusiasm for the magic of cinema. Here, we aim to provide
                    fellow film enthusiasts with a curated selection of the most captivating and financially successful films and TV
                    shows currently dominating the entertainment industry.
                </p>
                <p className={style.paragraph}>Our mission is to offer a comprehensive overview of today's cinematic landscape,
                    ensuring that every visitor can immerse themselves in the world of storytelling
                    and cinematic excellence. Join us as we embark on this exciting journey to celebrate the art of filmmaking
                    and share our love for the silver screen with the world</p>
            </div>
            <div className={style.principalDiv}>
                <p className={style.subtitle}>Discover</p>
                <div className={style.divTop}>
                    <p className={style.title}>Top</p>
                    <Link href={'/movies'} className='viewAllButton'>View all</Link>
                </div>
                <p className={style.subtitle}>Explore the latest blockbuster movies and timeless classics.</p>
            </div>
            <div className={style.containerCarrusel}>
                <Carrusel isMovie />
            </div>
            <div className={style.principalDiv}>
                <p className={style.subtitle}>Discover</p>
                <div className={style.divTop}>
                    <p className={style.title}>Top</p>
                    <Link href={'/series'} className='viewAllButton'>View all</Link>
                </div>
                <p className={style.subtitle}>Explore the latest blockbuster series and timeless classics.</p>
            </div>
            <div className={style.containerCarrusel}>
                <Carrusel />
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GxoE7VkkEWu9WGPdvC3t3DByDIU3EfE&ehbc=2E312F&noprof=1" height="480"></iframe>
        </div>
    )
}