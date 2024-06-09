import { getSerie, getVideoSerie, getCreditsSeries, getSimilarSeries, getReviewSeries } from "@/lib/Requests/tmbd_api"
import WrapperVideo from "../../../(movies)/movies/[id]/parts/Video"
import CarruselActores from "@/components/Sliders/CarruselActores"
import Tag from "../../../(movies)/movies/[id]/parts/Tags"
import { kanitRegular, montserrat } from "@/assets/Fonts"
import style from './style/SingleMovie.module.css'
import { showStart } from "@/lib/Static/Static"
import TitleSection from "@/components/Title"
import ActionButtons from "./parts/Buttons"
import Review from "@/components/Reviews"
import Grid from "@/components/Grid"
import { Suspense } from "react"




const SingleSerie = async ({ params }) => {


    const data = await getSerie(params.id)
    const video = await getVideoSerie(params.id)
    const actores = await getCreditsSeries(params.id)
    const review = await getReviewSeries(params.id)
    const similar = await getSimilarSeries(params.id)

    return (
        <main className={style.main}>
            <section className={style.videoSection}>
                <WrapperVideo
                    videoKey={video} />
            </section>
            <article className={style.article}>
                <header className={style.movieHeader}>
                    <h3 className={`${style.movieTitle} ${kanitRegular.className}`}>{data.original_title}</h3>
                    <p className={style.paragraph}>{data.overview}</p>
                    <p>{showStart(data)}</p>
                </header>
                <div className={style.tagContainer}>
                    <h2 className={`${style.titleTag} ${montserrat.className}`}>Tags</h2>
                    <ul className={style.listStyle}>
                        {
                            data?.genres?.map((item) => (
                                <Tag
                                    key={item.id}
                                    label={item.name} />
                            ))
                        }
                    </ul>
                </div>
                <ActionButtons
                    movie_id={data.id}
                    backdrop_path={data.backdrop_path}
                    media_type={'series'} />
            </article>
            <section className={style.actoresSection}>
                <TitleSection word1={'Actors'} word2={''} />
                <CarruselActores
                    dataFetch={actores} />
            </section>
            <div className={style.title}>
                <TitleSection word1={'SIMILIAR'} word2={'series'} />
            </div>
            <section>
                <Suspense fallback={<p>Loading...</p>}>
                    <Grid
                        data={similar}
                        isSingle={true}
                        media_type={'series'} />
                </Suspense>
            </section>
            <div className={style.title}>
                <TitleSection word1={'SERIES'} word2={'reviews'} />
            </div>
            <section className={style.sectionReview}>
                <Review
                    reviews={review.results} />
            </section>
        </main>
    )
}


export default SingleSerie