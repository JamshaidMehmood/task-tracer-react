import  propTypes  from "prop-types"
import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = (props) => {
  //   const onClickFun = () =>{
  //       console.log("Button Clicked")
  //  }
  
  const location = useLocation();
  
  return (
    
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === '/' && (
        <Button text={props.showContentAndColor ?"CLOSE" : "OPEN"} color={props.showContentAndColor ?"skyBlue" : "green"} onClick={props.onAdd}/>
      )}
    </header>
  )
}

Header.defaultProps={
    title: 'Task Tracer',
}

Header.prototype={
    title: propTypes.string.isRequired,
}


export default Header
