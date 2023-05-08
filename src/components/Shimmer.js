const ShimmerBox = () => {
    return (
        <div className="shimmer-box"></div>
    )
}

const Shimmer = () => {
    return (
        <div className="shimmer-con">
            {Array(15).fill("").map((x, ind) => <ShimmerBox key={ind} />)}
        </div>
    )
}

export default Shimmer