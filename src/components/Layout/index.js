import React from "react"

import './index.css'
import Header from "../Header"
import Body from "../Body"
import Footer from '../Footer'
import Rightbar from '../Rightbar'
import Leftbar from '../Leftbar'






const Layout=()=>{
    return(
        <div className="layout">
            
            <Header/>
            <div className="bodyslides">
                <Leftbar/>
                <Body/>
                <Rightbar/>
            </div>
            <Footer/>
            
        </div>
    )
}
export default Layout