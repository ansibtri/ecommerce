import './timeline.css';
const Timeline = () => {
  return (
    <div className='timeline'>
        <div className="container left-container">
            <img src="./assets/google.png" alt="" srcset="" />
            <div className="text-box">
                <h3>Alphabet Inc.</h3>
                <span>2018-2019</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span className="left-container-arrow"></span>
            </div>
        </div>
        <div className="container right-container">
            <img src="./assets/amazon.png" alt="" />
            <div className="text-box">
                <h3>2010</h3>
                <span>2018-2019</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span className="right-container-arrow"></span>
            </div>
        </div>
        <div className="container left-container">
        <img src="./assets/tesla.png" alt="" />
            <div className="text-box">
                <h3>2010</h3>
                <span>2018-2019</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span className="left-container-arrow"></span>
            </div>
        </div>
        <div className="container right-container">
        <img src="./assets/toyota.png" alt="" />
            <div className="text-box">
                <h3>2010</h3>
                <span>2018-2019</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span className="right-container-arrow"></span>
            </div>
        </div>
        <div className="container left-container">
        <img src="./assets/flipkart.png" alt="" />
            <div className="text-box">
                <h3>2010</h3>
                <span>2018-2019</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span className="left-container-arrow"></span>
            </div>
        </div>
        <div className="container right-container">
        <img src="./assets/youtube.png" alt="" />
            <div className="text-box">
                <h3>2010</h3>
                <span>2018-2019</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span className="right-container-arrow"></span>
            </div>
        </div>
    </div>
  )
}

export default Timeline