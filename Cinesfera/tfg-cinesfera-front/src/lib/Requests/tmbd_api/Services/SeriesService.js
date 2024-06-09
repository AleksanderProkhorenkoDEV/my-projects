export const serviceSplitSeries = (dataFetch, length) => {
    const data = []

    for (let i = 0; i < length; i++) {
        if (dataFetch[i].backdrop_path != null) {
            const serie = dataFetch[i]
            data.push(serie)
        }
    }

    return data
}

export const cleanDirtyJSONSeries = (dataFetch) => {
    const series = []
    dataFetch?.results.map((item) => {
        if (item?.backdrop_path != null) series.push(item)
    })
    return series
}