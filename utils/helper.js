export const searchHandler = (data, name, setDataF) => {
    const filtredData = data.filter(resData => resData?.data?.name.toLowerCase().includes(name.toLowerCase()))
    setDataF(filtredData)
}

export const topRatedHandler = (data, setDataF) => {
    const filtredData = data.filter(resData => resData?.data?.avgRating >= 4).sort((a, b) => b?.data?.avgRating - a?.data?.avgRating)
    setDataF(filtredData)
}