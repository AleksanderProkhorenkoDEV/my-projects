'use client'

import { template } from "./Template"

const Button = ({ label, url = '' ,isLoading, type='submit', styleType = 'contained', templateType = 'basic', onClick = () => {}, id }) => {

    const LabelTemplate = template[templateType]
    return (
        <button type={type} disabled={isLoading} className={styleType} onClick={onClick} id={id}>
            {isLoading && <span className="loader"></span> }
            <LabelTemplate label={label} url={url} />
        </button>
    )
}

export default Button