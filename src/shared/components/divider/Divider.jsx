import React from 'react'

const Divider = ({classes,img}) => {
    return (
        <div className={"divider "+classes} >
            <img src={"./assets/divider-"+img+".png"} alt="" srcSet="" />
        </div>
    )
}

export default Divider