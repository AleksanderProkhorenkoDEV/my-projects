import { displayDescription, showStartReview } from '@/lib/Static/Static'
import style from './style/Review.module.css'
import React from 'react'

const Review = ({ reviews }) => {
    return (
        <>
            {
                reviews?.length != 0 ?
                    reviews?.map((review, index) => (
                        <article
                            key={review.id}
                            className={style.reviewArticle}
                            style={index % 2 == 0 ?
                                {
                                    background: 'rgb(255,16,83)',
                                    background: 'linear-gradient(302deg, rgba(255,16,83,0.4959558823529411) 10%, rgba(68,161,238,4) 100%)'
                                } :
                                {
                                    background: 'rgb(255,16,83)',
                                    background: 'linear-gradient(65deg, rgba(255,16,83,0.4959558823529411) 10%, rgba(68,161,238,4) 100%)'
                                }
                            }>
                            <header className={style.headerReview}>
                                <img
                                    src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}` : '/images/icons/Acount.svg'}
                                    className={style.iconReview}
                                    alt={`${review.author}'s avatar`}
                                />
                                <p className={style.nameReview}>{review.author}</p>
                            </header>
                            <main className={style.mainReview}>
                                <h1 className={style.titleBody}>Rating:</h1>
                                <p>{showStartReview(review.author_details.rating)}</p>
                                <h1 className={style.titleBody}>Comment:</h1>
                                <p className={style.parrafoReview}>{displayDescription(review.content)}</p>
                            </main>
                        </article>
                    ))

                    :

                    <article className={style.noReviews}>
                        <p className={style.face}>
                            (^_^*)
                        </p>
                        <p className={style.noData}>No reviews yet...</p>
                    </article>
            }
        </>
    );
};

export default Review;
