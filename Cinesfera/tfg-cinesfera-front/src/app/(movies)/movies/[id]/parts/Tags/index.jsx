import style from './style/Tags.module.css'

const Tag = ({label}) => {
    return(
        <li className={style.itemStyle}>
            {label}
        </li>
    )
}

export default Tag