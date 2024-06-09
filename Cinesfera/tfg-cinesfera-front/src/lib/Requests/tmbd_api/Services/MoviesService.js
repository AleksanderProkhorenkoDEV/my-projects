export const serviceSplitMovies = (dataFetch, length) => {
    const data = []

    for (let i = 0; i < length; i++) {

        if (dataFetch[i].backdrop_path != null) {
            const movie = dataFetch[i]
            data.push(movie)
        }
    }

    return data
}

export const cleanDirtyJSONMovies = (dataFetch) => {
    const movies = []
    dataFetch?.results?.map((item) => {
        if (item?.backdrop_path != null) movies.push(item)
    })
    return movies
}

export const filterClips = (dataFetch) => {
    let key = ''
    dataFetch?.results?.map((item) => {
        if(item.type = 'Teaser'){
            key = item.key
        }
    })
    return key
}