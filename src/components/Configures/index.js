import './index.css'
import React from 'react'

const Configures =()=>{
    return(
        <div className='main-bg-header'>
           <h1> You can select The Layouts</h1>
           <form>
            <input type='checkbox' id="leftbar" name="leftbar" value="leftbar"/>
            <label for="laftbar"> leftbar</label><br/>

            <input type='checkbox' id="content" name="content" value="content"/>
            <label for="content"> leftbar</label><br/>

            <input type='checkbox' id="rightbar" name="rightbar" value="rightbar"/>
            <label for="rightbar"> leftbar</label><br/>

           </form>
           <button>Enter</button>

        </div>
    )
}

export default Configures