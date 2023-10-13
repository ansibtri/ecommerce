import React from 'react'
import './alert.css'
const Alert = ({title,message,dismiss,severity}) => {
    const [isAlert, setIsAlert] = React.useState(true);

    // const playSound = () => {
    //     const audio = new Audio('/sounds/alert.wav');
    //     audio.play();
    // }
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         playSound();
    //         setTimeout(5000)
    //         setIsAlert(false);
    //     }, 1000);
    // }
    // , [isAlert]);
    const Success = () => {
        return (
            <svg className="" focusable="false"  aria-hidden="true" viewBox="0 0 24 24" data-testid="SuccessOutlinedIcon">
                <path fill="#026118" d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
            </svg>
        );
    };
    const Error = () => {
        return (<svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path fill="#f78b96" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
        )
    };
    const Warning = () => {
        return (<svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ReportProblemOutlinedIcon"><path fill="#f8d467" d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>)
    };
    const Info = () => {
        return (<svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoOutlinedIcon"><path fill="#8f8df7" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>);
    };

    const Title = () => {
        return (
            <div className={"alert-component__content__title my-2"+" "+severity }>
                <h4>{title}</h4>
            </div>
        )
    }
    return (
        <>
            <div className={isAlert ? "alert-component active display-flex flex-row rounded-lg pl-3 py-2" +" "+severity: "alert-component display-flex flex-row rounded-lg pl-3 py-2" +" "+severity}>
                <div className={"alert-component__icon display-flex place-items-center mr-3" + " "+severity}>
                    {severity === 'success' && <Success/>}
                    {severity === 'error' && <Error/>}
                    {severity === 'warning' && <Warning/>}
                    {severity === 'info' && <Info/>}
                </div>
                <div className={(title && message)? "alert-component__content display-flex flex-column justify-content-center":"alert-component__content display-flex flex-row justify-content-space-between align-items-center"}>
                    {title ? <Title/> : null}
                    {message ? <div className={"font-normal alert-component__content__body pb-1"+" "+severity}>
                        <p className={severity}>{message}</p>
                    </div> : null}
                    <div className="display-flex place-items-center">
                        {dismiss ? <button className={"alert-component__content__dismiss-btn  border-0 p-2 rounded-lg"+" "+severity} onClick={() => setIsAlert(false)}><i className="fa-solid fa-xmark"></i></button>:<button className={"alert-component__content__dismiss-btn  border-0 p-2 rounded-lg"+" "+severity} onClick={() => setIsAlert(false)}>Cancel</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alert