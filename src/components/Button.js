import  propTypes  from "prop-types"

const Button = (props) => {
//   const onClick = () =>{
//         console.log("Button Clicked")
//    }
  
    return (
    <div>
        <button onClick={props.onClick} style={{backgroundColor : props.color}} className="btn">{props.text}</button>
    </div>
  )
}


Button.defaultProps={
    color: 'steelblue',
}

Button.prototype={
    text: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
    onClick: propTypes.func,
}
export default Button
