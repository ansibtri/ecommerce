import './button.css';

const Button = ({type,text,name,classes,action}) => {
  return (
    <>
    {action && <button type={type} name={name} text={text} className={'btn '+classes} onClick={action}>{text}</button> }
    {action == null && <button type={type} name={name} text={text} className={'btn '+classes}>{text}</button> }
    </>
  )
}

export default Button