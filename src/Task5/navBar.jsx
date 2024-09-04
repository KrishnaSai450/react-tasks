import  {Link, NavLink}  from "react-router-dom"


const CustomNavBar = ()=>{

    return(
        <>
        <ul className="nav">
        <li className="nav-item">
          <Link to="/" style={{textDecoration:"none",color:"red",margin:"10px"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/about" style={{textDecoration:"none",color:"red",margin:"10px"}}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/setting" style={{textDecoration:"none",color:"red",margin:"10px"}}>Setting</Link>
        </li>
        
      </ul>


        </>
    )
}

export default CustomNavBar 