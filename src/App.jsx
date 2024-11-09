import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Faculty from "./Faculty";
import Ourcourse from "./ourcourse";
import Contact from "./Contact";
import Cybrom from "./Cybrom";

const Student=[
    {
    "rollno":121,
    "name":"Pawan",
    "city":"Bhopal"
},
    {
    "rollno":122,
    "name":"Naman",
    "city":"Bhopal"
},
    {
    "rollno":123,
    "name":"Aman",
    "city":"Bhopal"
},
    {
    "rollno":124,
    "name":"Raman",
    "city":"Bhopal"
},
    {
    "rollno":125,
    "name":"Gaggan",
    "city":"Bhopal"
}
]

const ans=Student.map((key)=>{
    return(
        <>
        <tr>
            <td style={{border:"1px solid ", padding:"20px"}}>{key.rollno}</td>
            <td style={{border:"1px solid ", padding:"20px"}}>{key.name}</td>
            <td style={{border:"1px solid ", padding:"20px"}}>{key.city}</td>
        </tr>
        </>
    )
})

const App=()=>{
    return(
        <>
       <BrowserRouter>
       
       <Routes>


     <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}></Route>

     <Route path="Home" element={<Home/>}/>
     <Route path="About" element={<About/>}/>
     <Route path="Faculty" element={<Faculty/>}/>
     <Route path="Ourcourse" element={<Ourcourse/>}/>
     <Route path="Contact" element={<Contact/>}/>
     </Route>

       </Routes>
       
       </BrowserRouter>


<Cybrom rollno="121" name="Pawan" city="Bhopal" ></Cybrom>


<table style={{border:"2px solid ", padding:"20px", backgroundColor:"aqua", fontSize:"20px"}}>

    <tr >
        <th style={{border:"1px solid ", padding:"20px"}}>Roll no </th>
        <th style={{border:"1px solid ", padding:"20px"}}>Name</th>
        <th style={{border:"1px solid ", padding:"20px"}}>City</th>
    </tr>
    {ans}
</table>
        </>
    )
}
export default App;

