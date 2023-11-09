import React from "react";
import './index.css'

const Body = ()=>{
    const showContent=()=>{
        return(
            <div >
                <p>Hi ranjith  this is the sample project for you so need to do this project as soon as possible and do as far as do</p>
            </div>
        )
    }
    return(
        <div className="body-bg">
            <div className="content">
                {showContent()}
            </div>
        
        </div>
    )
}

export default Body