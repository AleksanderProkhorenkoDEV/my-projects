import style from './style/TitleSection.module.css'
import { kanitExtraBold } from '@/assets/Fonts'

const TitleSection = ({ word1, word2 }) => {
    return (
        <h1 className={`${style.title} ${kanitExtraBold.className}`}>
            <span className={`${style.subtitle} ${kanitExtraBold.className}`}>{word1}</span>
            {word2}
        </h1>
    )

}

export default TitleSection