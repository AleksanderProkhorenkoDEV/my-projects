import { popularMoviesService, searchMovie, topMovies, upComing } from "@/lib/Requests/tmbd_api"
import style from '@/assets/styles/Movies/Movies.module.css'
import Slider from "@/components/Sliders/Hero"
import TitleSection from "@/components/Title"
import TopMedia from "@/components/Poster"
import SideBar from "@/components/Sidebar"
import MyImage from "@/components/Image"
import Grid from "@/components/Grid"
import { Suspense } from "react"

const Movies = async ({ searchParams }) => {

    const getPopularMovies = async () => {
        const data = await popularMoviesService()
        return data
    }

    const getTopMovie = async () => {
        const data = await topMovies()
        return data
    }

    const getUpComingMovie = async () => {
        const data = await upComing(6)
        return data
    }

    const queryMovies = async () => {
        const queryUrl = searchParams
        const data = await searchMovie(queryUrl)
        return data
    }

    const movies = await queryMovies()

    const moviesUpComing = await getUpComingMovie()
    return (
        <main className={style.main}>
            <Slider 
                getData={getPopularMovies()}
                label={'View Movies'}
                media_Type={'movies'} />
            <secion className={style.seccion}>
                <TitleSection
                    word1={'top'}
                    word2={'movies'} />
                <TopMedia
                    getData={getTopMovie()}
                    media_type={'movies'} />
            </secion>
            <section className={style.mainSection}>
                <SideBar />
                <Suspense fallback={<p>Loading...</p>}>
                    <Grid
                        data={movies}
                        media_type={'movies'} />
                </Suspense>
            </section>
            <section className={style.upComing}>
                <div className={style.triangle}></div>
                <p className={style.textTriangle}>
                    Are you ready to let yourself be carried<br />
                    away by the magic of cinema?
                </p>
                <div className={style.wraperMovies}>
                    {
                        moviesUpComing.map((item) => (
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

export default Movies