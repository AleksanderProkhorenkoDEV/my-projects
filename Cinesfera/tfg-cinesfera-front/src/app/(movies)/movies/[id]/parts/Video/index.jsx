'use client'

import style from './style/WrapperVideo.module.css'
import YouTube from "react-youtube";

const WrapperVideo = ({ videoKey }) => {

    return (
        <div className={style.videoContainer}>
            <YouTube videoId={videoKey} />
        </div>
    )
}

export default WrapperVideo