import { popularSeriesService, searchSerie, topSeries, upComingSeries } from "@/lib/Requests/tmbd_api"
import style from '@/assets/styles/Series/Series.module.css'
import Slider from "@/components/Sliders/Hero"
import TitleSection from "@/components/Title"
import TopMedia from "@/components/Poster"
import SideBar from "@/components/Sidebar"
import MyImage from "@/components/Image"
import Grid from "@/components/Grid"
import { Suspense } from "react"

const Series = async ({ searchParams }) => {

    const getPopularSeries = async () => {
        const data = await popularSeriesService()
        return data
    }

    const getTopSerie = async () => {
        const data = await topSeries()
        return data
    }

    const getUpComingSerie = async () => {
        const data = await upComingSeries(6)
        return data
    }

    const querySeries = async () => {
        const queryUrl = searchParams
        const data = await searchSerie(queryUrl)
        return data
    }

    const series = await querySeries()
    const seriesUpComing = await getUpComingSerie()
    return (
        <main className={style.main}>
            <Slider 
                getData={getPopularSeries()}
                label={'View Series'}
                media_Type={'series'} />
            <secion className={style.seccion}>
                <TitleSection
                    word1={'top'}
                    word2={'series'} />
                <TopMedia
                    getData={getTopSerie()}
                    media_type={'series'} />
            </secion>
            <section className={style.mainSection}>
                <SideBar />
                <Suspense fallback={<p>Loading...</p>}>
                    <Grid
                        data={series}
                        media_type={'series'} />
                </Suspense>
            </section>
            <section className={style.upComing}>
                <div className={style.triangle}></div>
                <p className={style.textTriangle}>
                    Are you ready to let yourself be carried<br />
                    away by the magic of cinema?
                </p>
                <div className={style.wraperSeries}>
                    {
                        seriesUpComing?.map((item) => (
                            <MyImage
                                key={item.id}
                                img_url={item.poster_path}
                                altDescription={item.title} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Series