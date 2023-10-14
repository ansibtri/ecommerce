import './button.css';

const Button = ({type,text,name,classes,action}) => {
  return (
    <button type={type} name={name} text={text} className={'btn '+classes} onClick= {action}>Click me!</button>
  )
}

export default Button