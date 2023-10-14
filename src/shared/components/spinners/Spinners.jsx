import './spinners.css'
const Spinners = ({ style, textEnable, dotsEnable }) => {
    return (
        <div className='spinner'>
            <div className="spinner-backdrop"></div>
            <div className='spinner-body' style={style}>
                <div className="spinner-border display-flex justify-content-center align-items-center" role="status">
                </div>
                {textEnable ? <div className="spinner-text">Loading...</div> : null}
            </div>
        </div>
    )
}

export default Spinners