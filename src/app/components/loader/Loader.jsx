
const Loader = ({text}) => {
    return (
        <div className="container-loader">
            <div className="spinner"></div>
            <p>{text}</p>
        </div>
    )
}

export default Loader