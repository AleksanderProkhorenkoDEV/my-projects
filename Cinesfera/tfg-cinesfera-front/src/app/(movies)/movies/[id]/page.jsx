import { getCredits, getMovie, getVideoMovie, getReview, getSimilar } from "@/lib/Requests/tmbd_api"
import CarruselActores from "@/components/Sliders/CarruselActores"
import { kanitRegular, montserrat } from "@/assets/Fonts"
import style from './style/SingleMovie.module.css'
import { showStart } from "@/lib/Static/Static"
import TitleSection from "@/components/Title"
import ActionButtons from "./parts/Buttons"
import Review from "@/components/Reviews"
import WrapperVideo from "./parts/Video"
import Grid from "@/components/Grid"
import { Suspense } from "react"
import Tag from "./parts/Tags"




const SingleMovie = async ({ params }) => {


    const data = await getMovie(params.id)
    const video = await getVideoMovie(params.id)
    const actores = await getCredits(params.id)
    const review = await getReview(params.id)
    const similar = await getSimilar(params.id)

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
                    media_type={'movies'} />
            </article>
            <section className={style.actoresSection}>
                <TitleSection word1={'Actors'} word2={''} />
                <CarruselActores
                    dataFetch={actores} />
            </section>
            <div className={style.title}>
                <TitleSection word1={'SIMILIAR'} word2={'movies'} />
            </div>
            <section>
                <Suspense fallback={<p>Loading...</p>}>
                    <Grid
                        data={similar}
                        isSingle={true}
                        media_type={'movies'} />
                </Suspense>
            </section>
            <div className={style.title}>
                <TitleSection word1={'MOVIES'} word2={'reviews'} />
            </div>
            <section className={style.sectionReview}>
                <Review
                    reviews={review.results} />
            </section>
        </main>
    )
}


export default SingleMovie