import { toast } from "sonner"

export const displayErrorsMessage = (result) => {
    const errorFields = Object.keys(result);
    errorFields.forEach(field => {
        const errorMessages = result[field].join(', ');
        toast.error(errorMessages)
    });
}

export const displaySuccesMessage = (message) => {
    toast.success(message)
}

export const displayErrorMessage = (err) => {
    toast.error(err)
}

export const displayInfoMessage = (info) => {
    toast.info(info)
}

export const displayWarning = (info) => {
    toast.warning(info)
}

export const displayDescription = (description) => {
    return description.length > 400 ? `${description.substring(0, 350)}...` : description
}

export const showStart = (data) => {
    const average = data.vote_average
    const number = Math.floor(average)
    const stars = []
    for (let index = 1; index <= number; index++) {
        stars.push(<img src={'/images/icons/Stars.svg'} alt="Stars icon" width={24} height={24} key={index} />)
    }
    return stars
}

export const showStartReview = (data) => {
    const average = data
    const number = data > 5 ? 5 : Math.floor(average)
    const stars = []
    for (let index = 1; index <= number; index++) {
        stars.push(<img src={'/images/icons/Stars.svg'} alt="Stars icon" width={24} height={24} key={index} />)
    }

    if(stars.length != 0){
        return stars
    }else{
        return 'This user has not rated the film'
    }
}