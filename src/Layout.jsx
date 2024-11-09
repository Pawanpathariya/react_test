import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(<>
<nav style={{backgroundColor:"red", height:"40px", display:"flex", justifyContent:"space-evenly",color:"white"}}>
    <Link to="Home" style={{color:"white", textDecoration:"none"}}>Home</Link>|
    <Link to="About" style={{color:"white", textDecoration:"none"}}>About</Link>|
    <Link to="Faculty" style={{color:"white", textDecoration:"none"}}>Faculty</Link>|
    <Link to="Ourcourse" style={{color:"white", textDecoration:"none"}}>Our Course</Link>|
    <Link to="Contact" style={{color:"white", textDecoration:"none"}}>Contact</Link>
</nav>


<Outlet/>

</>)
}
export default Layout;